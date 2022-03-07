import styled from 'styled-components'

export const InfoContainer = styled.div`
    border: 1px solid gray;
    margin: 95px auto 0 auto ;
    width: fit-content;  
`

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    gap: 30px ;
`

export const FormContent = styled.div`
    width: 50%;

`
export const FormItem = styled.div`
    width: 100%;
    display: flex;
    margin: 10px;

`


export const Select = styled.select`
width: 188px;
    
`

export const Input = styled.input`
width: 180px;
    
`

export const Label = styled.label`
    width: 180px;
`

export const FormCheck = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    label{
        margin-left:5px ;
    }
`

export const SaveCancel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;
    gap:10px ;

`

export const Button = styled.button`
    background: ${props => props.btnColor };
    color: ${props => props.btnColor ? "#fff" : "#333" };
    border: none;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`

export const ButtonDiv = styled.div`
    background: #8c959f;
    color: ${props => props.btnColor ? "#fff" : "#333" };
    border: none;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background-color: #fff8c5;
    }

`
