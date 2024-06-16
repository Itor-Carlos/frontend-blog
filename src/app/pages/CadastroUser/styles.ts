import styled from "styled-components";
import { BaseFormComponent } from "../../components/BaseComponents/Form";


export const FormUserContainer = styled(BaseFormComponent)`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 40px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 
    input{
        margin-bottom: 5px;
    }
    
    .password{
        width: calc(100% - 100px);;
    }

    div.errorForm{
        color: red;
        font-size: 14px;
        margin-bottom: 14px;

    }

`