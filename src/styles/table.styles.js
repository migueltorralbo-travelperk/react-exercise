
import styled from 'styled-components'

export const RecipeTable = styled.table` 
    border-spacing: 1px 0;
    width: 100%;
`

export const RecipeTd = styled.td`
    padding: 10px;
    text-align: ${props => props.align || "left"};
`

export const RecipeTr = styled.tr`
    background-color: #F3E9DC;
    &:nth-of-type(odd) {
    background-color: #E5CFB3;
    }
`

export const RecipeTh = styled.th`
    padding: 10px;
    background-color: #5E3023;
    color: white;
    font-weight:bold;
    font-size: large;
    &:first-of-type {
    border-top-left-radius: 10px;
    }
    &:last-of-type {
    border-top-right-radius: 10px;
    }
`

export const EditButton = styled.button`
    width: 50px;
    padding: 8px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    background-color: #5E3023;
    color: white;
    &:hover {
        background-color: #A4533D;
    }
`