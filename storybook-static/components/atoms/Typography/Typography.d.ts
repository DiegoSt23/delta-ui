export interface TypographyProps {
    children: string;
    type?: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'subtitle' | 'paragraph' | 'paragraph2' | 'paragraph3';
    className?: string;
    upperCase?: boolean;
}
export declare const Typography: {
    ({ children, type, className, upperCase, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TypographyProps>;
};
