import { ReactNode } from 'react';
type CellContentProps = string | number | ReactNode;
type LabelProps = {
    content: CellContentProps;
    numberOfColumns?: number;
    options?: {
        item: string;
        action: () => void;
    }[];
    optionsMenuWidth?: number | string;
};
type ItemProps = {
    [key: string]: CellContentProps;
    id: string;
};
export interface TableProps {
    items: ItemProps[];
    labels: LabelProps[];
    minWidth?: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    underline?: boolean;
    checkboxSelection?: boolean;
    onRowsSelection?: (values: (string | number)[]) => void;
    mainContainerClassName?: string;
    bodyRowsClassName?: string;
    headerRowClassName?: string;
}
export declare const Table: {
    ({ items, labels, minWidth, justifyContent, underline, checkboxSelection, onRowsSelection, mainContainerClassName, bodyRowsClassName, headerRowClassName, }: TableProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TableProps>;
};
export {};
