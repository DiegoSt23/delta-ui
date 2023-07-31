import { ReactNode } from 'react';
export interface TooltipProps {
    children: ReactNode;
    tooltipContent: string | ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    maxWidth?: number;
    className?: string;
}
export declare const Tooltip: {
    ({ children, tooltipContent, position, maxWidth, className, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TooltipProps>;
};
