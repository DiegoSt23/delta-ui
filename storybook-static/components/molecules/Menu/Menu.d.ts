import { ReactNode } from 'react';
import { MenuItemProps } from '../../atoms';
export interface MenuProps {
    items: MenuItemProps[];
    menuIcon?: ReactNode;
    width?: number | string;
    position?: 'left' | 'right';
    optionsContainerClassName?: string;
    optionsClassName?: string;
}
export declare const Menu: {
    ({ items, menuIcon, width, position, optionsContainerClassName, optionsClassName, }: MenuProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<MenuProps>;
};
