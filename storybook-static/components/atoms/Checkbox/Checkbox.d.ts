import { ReactNode } from 'react';
export interface CheckboxProps {
    onChange: (val: boolean) => void;
    isDefaultChecked?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    buttonClassName?: string;
    labelClassName?: string;
    checkedIcon?: ReactNode;
    checkedColor?: string;
}
export declare const Checkbox: {
    ({ isDefaultChecked, onChange, disabled, size, label, buttonClassName, labelClassName, checkedIcon, checkedColor, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CheckboxProps>;
};
