import { ReactNode } from 'react';
export interface NavBarItemProps {
    name: string;
    icon: ReactNode;
    isActive: boolean;
    onClick?: () => void;
    className?: string;
    activeClassName?: string;
    render?: ({ icon, isActive, }: {
        icon: ReactNode;
        isActive: boolean;
    }) => ReactNode;
}
export declare const NavBarItem: {
    ({ name, icon, onClick, isActive, className, activeClassName, render, }: NavBarItemProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<NavBarItemProps>;
};
