import { ReactNode } from 'react';
export interface CollapsibleProps {
    title: string;
    content: ReactNode;
    mainContainerClassName?: string;
    headerClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
}
export declare const Collapsible: {
    ({ title, content, mainContainerClassName, headerClassName, titleClassName, contentClassName, }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CollapsibleProps>;
};
