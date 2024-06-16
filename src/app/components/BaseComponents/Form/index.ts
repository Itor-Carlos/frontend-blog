import styled from "styled-components";

export const BaseFormComponent = styled.div`
    margin: auto;
    margin-top: 8px;

    input{
        width: calc(100% - 20px);
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    label{
        display: block;
        font-size: 14px;
        color: #333;
        text-align: left;
        margin-bottom: 5px;
    }

    button{
        width: 100%;
        padding: 10px;
        background-color: #ff6347;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover{
        background-color: #e55337;
    }
    
    h1{
        color: #ff6347;
        margin-bottom: 20px;
        font-size: 32px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serifs;
        text-align: center; 
    }

`

