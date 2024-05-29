import { ButtonContainer, LoginContainer } from "./styles";
import { Button } from "../../components/Button";

export function LoginPage(){
    return (
        <LoginContainer>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" id="email" name="email" required />
                <label>Senha:</label>
                <input type="password" id="password" name="password" required />
                <ButtonContainer>
                    <Button label="Login"/>
                    <Button label="Registrar" />
                </ButtonContainer>
            </form>
        </LoginContainer>
    )
}