import  styled from 'styled-components'


export const TableContainer = styled.table`
    background-color: #FFFFFF;
    width: 100%;
    border: 1px solid black;
    border-color: #24292f;
    border-collapse: collapse;
    
`

export const TableBody = styled.tbody`
    background-color: transparent;
`

export const TableHeader = styled.thead`
    background-color: #8c959f;
    opacity: 0.5;
`

export const TableRow = styled.tr`
    padding: 0;
    margin: 0;
    background: ${props => props.bgColor };
    &:hover{
        cursor: pointer;
    }
`

export const TableData = styled.td`
    color: #24292f;
    border-left: 1px solid black;
    padding:3px ;
    img{
        width:15px;
        height:15px;
        float: right;
        border: 1px dotted #24292f;
        border-radius:50%;
        transform: rotate(0);
        z-index: 1;
        &:hover{
            transform: rotate(30deg);
        }
    }
`