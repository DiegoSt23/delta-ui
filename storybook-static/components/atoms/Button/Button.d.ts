import { ReactNode } from 'react';
export interface ButtonProps {
    children: string | ReactNode;
    onClick: () => void;
    variant?: 'hollow' | 'filled' | 'text';
    small?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    iconPosition?: 'prefix' | 'suffix';
    className?: string;
}
export declare const Button: {
    ({ variant, small, children, onClick, disabled, fullWidth, icon, iconPosition, className, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ButtonProps>;
};
