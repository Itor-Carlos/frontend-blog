import { HeaderContainer } from "./styles"

export function Header(){
    return (
        <HeaderContainer>
            <div className="header-div">
                <div className="logo">Blog Exemplo</div>
                <nav>
                    <a href="/">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Login</a>
                </nav>
            </div>
        </HeaderContainer>
    )
}