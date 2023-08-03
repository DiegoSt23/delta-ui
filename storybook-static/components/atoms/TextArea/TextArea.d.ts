export interface TextAreaProps {
    onChange: (val: string) => void;
    value: string;
    name?: string;
    id?: string;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    error?: boolean;
    numberOfRows?: number;
    className?: string;
}
export declare const TextArea: {
    ({ value, id, placeholder, name, label, onChange, disabled, fullWidth, helperText, error, numberOfRows, className, }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TextAreaProps>;
};
