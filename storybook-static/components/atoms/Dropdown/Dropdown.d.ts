type ItemProps = {
    name: string;
    value: string | number;
};
export interface DropdownProps {
    items: ItemProps[];
    onChange: (value: string | number) => void;
    placeholder?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    mainContainerClassName?: string;
    optionsContainerClassName?: string;
    optionClassName?: string;
}
export declare const Dropdown: {
    ({ items, onChange, placeholder, label, error, helperText, mainContainerClassName, optionsContainerClassName, optionClassName, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<DropdownProps>;
};
export {};
