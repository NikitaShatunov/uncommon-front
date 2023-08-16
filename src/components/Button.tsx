import { ReactNode } from "react";

interface Button {
    onClickButton: (prop?: string) => void
    children?: ReactNode,
    size: 'small' | 'medium' | 'large'
    primary: boolean
}

const Button = ({onClickButton, size, primary, children} : Button) => {
    return ( <button className={`button button__${size} ${primary ? 'button__primary' : ''}`} onClick={() => onClickButton()}>{children}</button> );
}
 
export default Button;