import { ReactNode } from 'react';
export interface LinkProps {
    href: string;
    children: string | ReactNode;
    variant: 'subtitle' | 'paragraph' | 'paragraph2';
    textDecoration?: 'underline' | 'default';
    className?: string;
    typographyClassName?: string;
}
export declare const Link: {
    ({ href, children, variant, textDecoration, className, typographyClassName, }: LinkProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<LinkProps>;
};
