import { NavBarItem } from "../../types/NavBar";
import { NavContainer } from "./styles";

interface NavBarProps {
    navBarItems: NavBarItem[];
}

export const NavBar = ({ navBarItems }: NavBarProps) => {
    return (
        <NavContainer>
            {navBarItems.map((item, index) => (
                <a key={index} href={item.href}>{item.label}</a>
            ))}
        </NavContainer>
    );
}
