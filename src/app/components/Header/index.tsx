import { HeaderContainer } from "./styles"

interface HeaderProps{
    title: string
}

export function Header({title = "Blog Exemplo"}: HeaderProps){
    return (
        <HeaderContainer>
            <div className="header-div">
                <div className="logo">{title}</div>
                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
        </HeaderContainer>
    )
}