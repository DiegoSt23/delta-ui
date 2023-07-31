import { ReactNode } from 'react';
export interface InputProps {
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password';
    placeholder?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    buttonContent?: string | ReactNode;
    buttonOnClick?: () => void;
    fullWidth?: boolean;
    helperText?: string;
    error?: boolean;
    maxLength?: number;
    minLength?: number;
    containerClassName?: string;
    inputClassName?: string;
}
export declare const Input: {
    ({ value, onChange, type, name, placeholder, label, disabled, buttonContent, buttonOnClick, fullWidth, helperText, error, maxLength, minLength, containerClassName, inputClassName, }: InputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<InputProps>;
};
