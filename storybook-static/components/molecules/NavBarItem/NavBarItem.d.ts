import { ReactNode } from 'react';
export interface NavBarItemProps {
    name: string;
    icon: ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    className?: string;
    activeClassName?: string;
    render?: (name: string, icon: ReactNode, isActive: boolean) => ReactNode;
}
export declare const NavBarItem: {
    ({ name, icon, onClick, isActive, className, activeClassName, render, }: NavBarItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<NavBarItemProps>;
};
