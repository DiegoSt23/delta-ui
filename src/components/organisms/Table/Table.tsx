/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { useTheme } from '../../../context';
import { TableRow } from '../../molecules';
import { Spinner } from '../../atoms';
import styles from './table.module.scss';

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
  loading?: boolean;
  loadingProps?: {
    variant?: 'spin' | 'spin2' | 'doubleSpin' | 'pulse' | 'pulse2' | 'dots';
    size?: 'sm' | 'md' | 'lg';
  };
  mainContainerClassName?: string;
  bodyRowsClassName?: string;
  headerRowClassName?: string;
}

const defaultProps: Partial<TableProps> = {
  minWidth: 768,
  justifyContent: 'flex-start',
  underline: false,
  checkboxSelection: false,
  onRowsSelection: undefined,
  loading: false,
  loadingProps: {
    variant: 'spin',
    size: 'md',
  },
  mainContainerClassName: undefined,
  bodyRowsClassName: undefined,
  headerRowClassName: undefined,
};

const handleMakeData = (arr: Array<any>, indexesArr: number[]) =>
  arr.map((row) => {
    const rowId = row.find((cellItem: CellContentProps[]) =>
      cellItem.includes('id')
    )[1];
    const rowItems = row
      .filter((cellItem: CellContentProps[]) => !cellItem.includes('id'))
      .map((cellItem: CellContentProps[], index: number) => ({
        content: cellItem[1],
        numberOfColumns: indexesArr[index],
      }));

    return {
      items: rowItems,
      id: rowId,
    };
  });

export const Table = ({
  items,
  labels,
  minWidth,
  justifyContent,
  underline,
  checkboxSelection,
  onRowsSelection,
  loading,
  loadingProps,
  mainContainerClassName,
  bodyRowsClassName,
  headerRowClassName,
}: TableProps) => {
  const { theme } = useTheme();
  const [localItems, setLocalItems] = useState<ItemProps[]>(items);
  const [selectedRows, setSelectedRows] = useState<(number | string)[]>([]);
  const columnsWidth = labels?.map(
    ({ numberOfColumns }) => numberOfColumns || 1
  );
  const tableArr = localItems?.map((item) => Object.entries(item));
  const tableData = handleMakeData(tableArr, columnsWidth);

  const handleSelectRow = (isSelected: boolean, id: string | number) => {
    if (isSelected) {
      if (!selectedRows.includes(id)) {
        setSelectedRows([...selectedRows, id])
      }
    }

    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    if (onRowsSelection) {
      onRowsSelection(selectedRows);
    }
  }, [selectedRows]);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  return (
    <div className={[styles[`tableContainer${theme}`], mainContainerClassName].join(' ')}>
      <div
        style={{ minWidth, opacity: loading ? 0.4 : 1 }}
        className={styles.tableSubContainer}
      >
        <div className={styles.header}>
          <TableRow
            items={labels}
            type='header'
            justifyContent={justifyContent}
            checkboxSelection={checkboxSelection}
            mainContainerClassName={headerRowClassName}
          />
        </div>
        <div className={styles.body}>
          {tableData?.map((item) => (
            <TableRow
              key={item.id}
              {...item}
              justifyContent={justifyContent}
              underline={underline}
              checkboxSelection={checkboxSelection}
              mainContainerClassName={bodyRowsClassName}
              onRowSelection={(selected) => handleSelectRow(selected, item.id)}
            />
          ))}
        </div>
      </div>
      {loading && (
        <div className={styles.spinnerContainer}>
          <Spinner {...loadingProps} />
        </div>
      )}
    </div>
  );
};

Table.defaultProps = defaultProps;
