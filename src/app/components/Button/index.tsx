import { Link } from "react-router-dom";

interface ButtonProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (object?: any) => void;
    label: React.ReactNode;
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