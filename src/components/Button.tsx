interface ButtonProps {
    onClick: () => void;
    children: string;
}

export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    )
}