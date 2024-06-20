import { NavBarItem } from "../../types/NavBar"
import { NavBar } from "../NavBar"
import { HeaderContainer } from "./styles"

interface HeaderProps{
    title: string
}

const headerNavItems: NavBarItem[] = [
    {href: "/", label:"Início"},
    {href: "/sobre", label:"Sobre"},
    {href: "/login", label:"Login"},
]

export function Header({title = "Blog Exemplo"}: HeaderProps){
    return (
        <HeaderContainer>
            <div className="header-div">
                <div className="logo">{title}</div>
                <NavBar navBarItems={headerNavItems}/>
            </div>
        </HeaderContainer>
    )
}