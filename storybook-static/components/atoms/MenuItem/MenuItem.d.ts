import { ReactNode } from 'react';
export interface MenuItemProps {
    title: string;
    onClick: () => void;
    description?: string;
    icon?: ReactNode;
    underline?: boolean;
    className?: string;
}
export declare const MenuItem: {
    ({ title, description, icon, onClick, underline, className, }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<MenuItemProps>;
};
