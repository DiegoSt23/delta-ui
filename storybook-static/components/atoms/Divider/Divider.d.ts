export interface DividerProps {
    variant?: 'horizontal' | 'vertical';
    margin?: number;
    height?: number;
}
export declare const Divider: {
    ({ variant, margin, height }: DividerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<DividerProps>;
};
