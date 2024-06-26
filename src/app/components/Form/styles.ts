import styled from "styled-components";
import { BaseFormComponent } from "../BaseComponents/Form";


export const FormContainer = styled(BaseFormComponent)`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 40px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


    .field{
        margin-top: 8px;
    }

    div.errorForm{
        color: red;
        font-size: 14px;
        margin-bottom: 14px;
    }
    button{
        margin-top: 16px;
    }
`