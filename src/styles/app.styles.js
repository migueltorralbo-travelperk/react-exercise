import styled from "styled-components";

export const AppDiv =  styled.div`
    padding-top: 2.5rem;
`

export const Container = styled.div`
    display: grid;
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;    
`

export const ButtonRecipe = styled.button`
    width: 100px;
    padding: 8px;
    border: none;
    font-weight: bold;
    margin-right: 10px;
    font-size: 14px;
    background-color: #5E3023;
    color: white;
    &:hover {
        background-color: #A4533D;
    }
`

export const SubmitRecipe = styled.input`
    width: 100px;
    padding: 8px;
    border: none;
    font-weight: bold;
    margin-right: 10px;
    font-size: 14px;
    background-color: #5E3023;
    color: white;
    &:hover {
        background-color: #A4533D;
    }
`

export const BottomBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    padding-top: 10px;
`

export const TextField = styled.input`
    padding: 8px;
    height: 16px;
    width: ${props => props.width || "100%"};
    margin-top: auto;
    margin-left: auto;
    margin-right: 10px;
    font-size: 15px;
    border:none;
    background-color: #EFE2D1;
`

export const FormRecipe = styled.form`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 10px;
    margin-top: 40px;
    border-top-style: solid;
    border-color: #5E3023;
    border-width: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `

export const FormTd = styled.td`
    padding-right:20px;
    padding-top:5px;
    padding-bottom: 10px;
    text-align: ${props => props.align || "right"};

`

export const FormTable = styled.table`
    width: 100%;
`

export const FromTitle = styled.label`
    font-size: larger;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #5E3023;

`