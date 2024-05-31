import { Link } from "react-router-dom";

interface ButtonProps{
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    link?: string;
}

export function Button({onClick, label, disabled=false, link = "#"}: ButtonProps){
    return (
        <Link to={link}>
            <button  disabled={disabled} onClick={onClick}>{label}</button>
        </Link>
    )
}