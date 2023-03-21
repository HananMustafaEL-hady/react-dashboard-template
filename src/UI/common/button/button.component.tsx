import React from 'react';
interface Props extends React.HTMLProps<HTMLDivElement> {
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    icon?: string | JSX.Element;
}
export const Button: React.FC<Props> = ({
    type = 'button',
    className,
    isLoading,
    disabled,
    onClick,
    icon,
    children,
    ...props
}) => {
    return (
        <button
            type={type}
            className={`${className ? className : ''} `}
            disabled={disabled || isLoading}  >{isLoading ? <span className='spinner'></span> : children}</button>
    )
}
