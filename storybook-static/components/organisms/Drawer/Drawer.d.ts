import { ReactNode } from 'react';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    header?: string | ReactNode;
    position?: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
}
export declare const Drawer: {
    ({ isOpen, onClose, children, position, className, }: DrawerProps): false | import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<DrawerProps>;
};
