import { ReactNode } from 'react';
export interface CardProps {
    children: ReactNode;
    headerTitle?: string;
    headerElement?: ReactNode;
    footer?: ReactNode;
    fullWidth?: boolean;
    mainContainerClassName?: string;
    headerClassName?: string;
    footerClassName?: string;
}
export declare const Card: {
    ({ children, headerTitle, headerElement, footer, fullWidth, mainContainerClassName, headerClassName, footerClassName, }: CardProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CardProps>;
};
