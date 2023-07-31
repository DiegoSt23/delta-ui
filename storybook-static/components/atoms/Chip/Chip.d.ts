import { ReactNode } from 'react';
export interface ChipProps {
    children: string;
    color?: 'primary' | 'green' | 'blue' | 'pink' | 'yellow' | 'purple';
    icon?: ReactNode;
    iconPosition?: 'prefix' | 'suffix';
}
export declare const Chip: {
    ({ children, color, icon, iconPosition }: ChipProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ChipProps>;
};
