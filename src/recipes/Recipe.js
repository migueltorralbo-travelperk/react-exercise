import React, {useState} from 'react'
import { getRecipe, getRecipes, postRecipe, updateRecipe} from '../actions/Recipe';
import { Container, ButtonRecipe,BottomBar,TextField, FormRecipe,FormTd,FormTable,FromTitle,SubmitRecipe } from '../styles/app.styles';
import RecipeView from './RecipeView';

const Recipe = () => {
    const [recipes, setRecipes] = useState(null);
    const [idSearch, setIdSearch] = useState({id: ""})
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: ''
    })

    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        setFormData((data) => { return { ...data, [e.target.name] : e.target.value }})
    }
  
    const search = async () => {
        let recipes;
        if (idSearch.id !== '') {
            recipes = await getRecipe(idSearch.id)
            if (recipes) recipes = [recipes,]

        } else {
            recipes = await getRecipes();
        }
        console.log(recipes);
        if (recipes) {
            console.log("first");
            setRecipes(recipes);
        } else {
            setRecipes(null);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(isFormValid()) {
            const postData = {
                'name': formData.name,
                'description': formData.description,
                'ingredients': formData.ingredients.split(',').map(i => {
                    return {'name': i }
                })
            }
            if (editMode) {
                const res = await updateRecipe(postData, editId);
                console.log(res);
                await search();
                cancelEditMode();
            } else {
                // ADD
                const res = await postRecipe(postData);

                console.log(res);
                await search();
            }
        } else {
            alert('Please, fullfill all the data')
        }
    }

    const switchEdit = (id) => {
        const recipe = recipes.filter(data => data.id === id)[0];
        console.log(recipe);
        setFormData({
            name: recipe.name,
            description: recipe.description,
            ingredients: recipe.ingredients.map(i => i.name).join(", ")
        })
        document.getElementById("name").value =  recipe.name;
        document.getElementById("description").value =  recipe.description;
        document.getElementById("ingredients").value =  recipe.ingredients.map(i => i.name).join(", ");
        setEditMode(true);
        setEditId(id);
    }

    const cancelEditMode = () => {
        document.getElementById("name").value =  null;
        document.getElementById("description").value =  null;
        document.getElementById("ingredients").value =  null;
        setEditMode(false);
        setEditId(null);
    }


    const isFormValid = () => {
        return formData.name !== '' && formData.description !== '' && formData.ingredients !== ''
    }

    return (
        <Container>
            <RecipeView recipes={recipes} switchEdit={switchEdit} search={search}/>        
            <BottomBar>                
                    <TextField type="number" placeholder='Id' size="3" width={"100px"} onChange={(e) => {setIdSearch( { id: e.target.value })}}/>
                <ButtonRecipe onClick={search}>Search</ButtonRecipe>
            </BottomBar>
            <FormRecipe onSubmit={submitForm}>
                <FormTable>
                    <tr>
                        <FormTd align="center" colSpan={2}>
                            <FromTitle>{editMode ? "Edit" : "Add"} recipe</FromTitle>
                        </FormTd>
                    </tr>
                    <tr>
                        <FormTd align="right"> 
                            <label>Name:</label>
                        </FormTd>
                        <FormTd>
                            <TextField type="text" id='name' placeholder='Name' name='name' onChange={handleChange}/>
                        </FormTd>
                    </tr>
                    <tr>
                        <FormTd> 
                            <label>Description:</label>
                        </FormTd>
                        <FormTd>
                        <TextField type="text" id="description" placeholder='Description' name='description' onChange={handleChange}/>
                        </FormTd>
                    </tr>
                    <tr>
                        <FormTd> 
                            <label>Ingredients:</label>
                        </FormTd>
                        <FormTd>
                        <TextField type="text" id="ingredients" placeholder='Ingredients, separated by comma (,)' name='ingredients' onChange={handleChange}/>
                        </FormTd>
                    </tr>
                    <tr>
                        <FormTd colSpan={2}>
                            {editMode ? 
                            <>
                            <ButtonRecipe type="button" name="cancel" onClick={cancelEditMode}>Cancelar</ButtonRecipe>                           
                            <SubmitRecipe type="submit" name="edit" value="Edit"/> 
                            </>
                            : <SubmitRecipe  type="submit" name="add" value="Add"/>}                           
                            
                        </FormTd>
                    </tr>
                </FormTable>
                
            </FormRecipe>
        </Container>
    )
}

export default Recipe