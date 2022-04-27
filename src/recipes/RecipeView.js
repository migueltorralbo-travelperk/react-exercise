import React from 'react'
import {RecipeTable, RecipeTd, RecipeTh, RecipeTr, EditButton} from '../styles/table.styles'
import { deleteRecipe } from '../actions/Recipe';
import {ReactComponent as DeleteLogo} from '../icons/delete.svg'
const RecipeView = ({recipes, switchEdit, search}) => {

  const onClickDelete = async (e) =>{
      const id = e.target.id;
      await deleteRecipe(id);
      search();
  }

  const editClick = (e) => {
      const id = e.target.id;
      switchEdit(parseInt(id));
  }

  return (
    <>
      {!recipes && <p>No recipes found</p>}
      {        
        recipes && 
        <RecipeTable>
          <RecipeTr>
            <RecipeTh>Nombre</RecipeTh>
            <RecipeTh>Descripcion</RecipeTh>
            <RecipeTh>Ingredients</RecipeTh>
            <RecipeTh></RecipeTh>
            <RecipeTh></RecipeTh>
          </RecipeTr>
          {
            recipes && recipes.map(r => {
              return <RecipeTr key={r.id}>
                  <RecipeTd>{r.name}</RecipeTd>
                  <RecipeTd>{r.description}</RecipeTd>
                  <RecipeTd>
                      {
                        r.ingredients.map(i => i.name).join(', ')
                      }
                  </RecipeTd>
                  <RecipeTd align="center">
                    <DeleteLogo id={r.id} onClick={onClickDelete}/>
                  </RecipeTd>
                  <RecipeTd align="center">
                    <EditButton id={r.id} onClick={editClick}>Edit</EditButton>
                  </RecipeTd>
                </RecipeTr> 
            })
          }
        </RecipeTable>        
      }
    </>
  )
}

export default RecipeView