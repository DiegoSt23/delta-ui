import { ReactNode } from 'react';
export interface TableRowProps {
    items: {
        content: string | number | ReactNode;
        numberOfColumns?: number;
        options?: {
            item: string;
            action: () => void;
        }[];
        optionsMenuWidth?: number | string;
    }[];
    type?: 'body' | 'header';
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    underline?: boolean;
    checkboxSelection?: boolean;
    onRowSelection?: (value: boolean) => void;
    mainContainerClassName?: string;
}
export declare const TableRow: {
    ({ items, type, justifyContent, underline, checkboxSelection, onRowSelection, mainContainerClassName, }: TableRowProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TableRowProps>;
};
