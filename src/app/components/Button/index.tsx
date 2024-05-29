interface ButtonProps{
    onClick?: () => void;
    label: string;
    disabled?: boolean;
}

export function Button({onClick, label, disabled=false}: ButtonProps){
    return (
        <button disabled={disabled} onClick={onClick}>{label}</button>
    )
}