import axios from "axios";

const API = axios.create({baseURL: 'http://127.0.0.1:8000/api'});

export const getRecipes = () => API.get('/recipe/recipes/');
export const getRecipeId = (id) => API.get(`/recipe/recipes/${id}/`)
export const postRecipe = (recipe) => API.post('/recipe/recipes/', recipe)
export const deleteRecipe = (id) => API.delete(`recipe/recipes/${id}/`)
export const updateRecipe = (recipe, id) => API.patch(`recipe/recipes/${id}/`, recipe)