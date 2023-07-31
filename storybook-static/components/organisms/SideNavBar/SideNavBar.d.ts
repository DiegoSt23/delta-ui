import { ReactNode } from 'react';
import { NavBarItemProps } from '../../molecules';
export interface SideNavBarProps {
    items: NavBarItemProps[];
    mainIcon?: ReactNode;
    onClickMainIcon?: () => void;
    itemsPosition?: 'center' | 'start';
    mainContainerClassName?: string;
    itemClassName?: string;
    activeItemClassName?: string;
}
export declare const SideNavBar: {
    ({ items, mainIcon, onClickMainIcon, itemsPosition, mainContainerClassName, itemClassName, activeItemClassName, }: SideNavBarProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<SideNavBarProps>;
};
