import { Button } from "../../components/Button";
import { FormUserContainer } from "./styles";


export function CadastroUser(){
    return (
        <FormUserContainer>
            <h1>Cadastrar usuário</h1>
            <form>
                <label>Nome:</label>
                <input type="text"/>

                <label>Senha:</label>
                <input type="password" className="password"/>

                <label>Email:</label>
                <input type="email"/>

                <Button label="Cadastrar" />

            </form>
        </FormUserContainer>
    )
}