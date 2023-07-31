export interface AvatarProps {
    name: string;
    imgUrl?: string;
    backgroundColor?: string;
    textColor?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    mainContainerClassName?: string;
    imgClassName?: string;
    textClassName?: string;
}
export declare const Avatar: {
    ({ name, imgUrl, backgroundColor, textColor, size, mainContainerClassName, imgClassName, textClassName, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<AvatarProps>;
};
