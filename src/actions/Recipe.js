import * as API from '../api/Recipe';

export const getRecipes = async () => {
    try {
        const {data} = await API.getRecipes();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getRecipe = async (id) => {
    try {
        const {data} = await API.getRecipeId(id);        
        return data
    } catch (error) {
        console.log(error);        
    }
}

export const postRecipe = async(recipe) => {
    try {
        const {data} = await API.postRecipe(recipe);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteRecipe = async(id) => {
    try {
        const res = await API.deleteRecipe(id);
        console.log(res);
        return res.status_code;
    } catch (error) {
        console.log(error);
    }
}

export const updateRecipe = async(recipe, id) => {
    try {
        const res = await API.updateRecipe(recipe, id);
        console.log(res);
        return res.status_code;
    } catch (error) {
        console.log(error);
    }
}