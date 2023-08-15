import { ReactNode } from 'react';
export interface BadgeProps {
    children: ReactNode;
    dot?: boolean;
    count?: number;
    indicatorColor?: string;
    indicatorPosition?: 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft';
    customIndicator?: ReactNode;
    indicatorClassName?: string;
    countClassName?: string;
}
export declare const Badge: {
    ({ children, dot, count, indicatorColor, indicatorPosition, customIndicator, indicatorClassName, countClassName, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<BadgeProps>;
};
