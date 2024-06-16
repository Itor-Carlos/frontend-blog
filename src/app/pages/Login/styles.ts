import styled from "styled-components";
import { BaseFormComponent } from "../../components/BaseComponents/Form";


export const LoginContainer = styled(BaseFormComponent)`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 40px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center; 

    input{
        margin-bottom: 20px;
    }
    button:hover{
        background-color: #e55337;
    }

    a{
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px
`