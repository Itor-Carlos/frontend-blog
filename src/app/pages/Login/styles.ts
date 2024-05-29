import styled from "styled-components";


export const LoginContainer = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 40px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center; 


    h1{
        margin-bottom: 20px;
        font-size: 24px;
        color: #333;
    }

    label{
        display: block;
        font-size: 14px;
        color: #333;
        text-align: left;
        margin-bottom: 5px;
    }

    input{
        width: calc(100% - 20px);
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
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
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px
`