export interface ToggleProps {
    isActive: boolean;
    onChange: (isActive: boolean) => void;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    buttonColor?: string;
    color?: string;
    mainContainerClassName?: string;
    labelClassName?: string;
    buttonClassName?: string;
    toggleClassName?: string;
}
export declare const Toggle: {
    ({ isActive, onChange, label, size, disabled, buttonColor, color, mainContainerClassName, labelClassName, buttonClassName, toggleClassName, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ToggleProps>;
};
