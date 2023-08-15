import { ReactNode } from 'react';
export interface AlertProps {
    text: string;
    title?: string;
    variant?: 'success' | 'warning' | 'error' | 'info';
    customIcon?: ReactNode;
    action?: () => void;
    actionElement?: ReactNode;
    mainContainerClassName?: string;
    textClassName?: string;
}
export declare const Alert: {
    ({ text, title, variant, customIcon, action, actionElement, mainContainerClassName, textClassName, }: AlertProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<AlertProps>;
};
