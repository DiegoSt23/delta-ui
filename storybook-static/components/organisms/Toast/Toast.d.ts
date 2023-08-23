/// <reference types="react" />
import { AlertProps } from '../../molecules';
export interface ToastRefProps {
    handleDisplayToast: () => void;
}
export interface ToastProps extends AlertProps {
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
    clearAfter?: number;
}
export declare const Toast: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<ToastRefProps>>;
