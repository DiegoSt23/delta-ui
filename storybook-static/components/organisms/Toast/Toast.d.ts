import { Dispatch, SetStateAction } from 'react';
import { AlertProps } from '../../molecules';
export interface ToastProps extends AlertProps {
    displayToast: boolean;
    resetDisplayToast: Dispatch<SetStateAction<boolean>>;
    position?: 'top-right' | 'top-left' | ' center';
    clearAfter?: number;
}
export declare const Toast: {
    ({ displayToast, resetDisplayToast, position, clearAfter, text, title, variant, customIcon, action, actionElement, mainContainerClassName, textClassName, }: ToastProps): false | import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ToastProps>;
};
