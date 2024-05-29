import React from "react";
import { ButtonContainer, LoginContainer } from "./styles";

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
                    <button type="submit">Entrar</button>
                    <button type="submit">Registrar</button>
                </ButtonContainer>
            </form>
        </LoginContainer>
    )
}