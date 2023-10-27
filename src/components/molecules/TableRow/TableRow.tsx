/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { useTheme } from '../../../context';
import { Menu as OptionsIcon } from '../../../assets/icons';
import { Typography, Checkbox } from '../../atoms';
import { Menu } from '../Menu';
import styles from './table-row.module.scss';

export interface TableRowProps {
  items: {
    content: string | number | ReactNode;
    numberOfColumns?: number;
    options?: {
      item: string;
      action: () => void;
    }[];
    optionsMenuWidth?: number | string;
    optionsMenuIcon?: ReactNode;
  }[];
  type?: 'body' | 'header';
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  underline?: boolean;
  checkboxSelection?: boolean;
  onRowSelection?: (value: boolean) => void;
  mainContainerClassName?: string;
}

const defaultProps: Partial<TableRowProps> = {
  type: 'body',
  justifyContent: 'flex-start',
  underline: false,
  checkboxSelection: false,
  onRowSelection: undefined,
  mainContainerClassName: undefined,
};

export const TableRow = ({
  items,
  type,
  justifyContent,
  underline,
  checkboxSelection,
  onRowSelection,
  mainContainerClassName,
}: TableRowProps) => {
  const theme = useTheme();
  const [isRowSelected, setIsRowSelected] = useState<boolean>(false);
  const totalNumberOfColumns = items
    ?.map((item) => item.numberOfColumns)
    ?.reduce((a, b) => (a || 1) + (b || 1));
  const columnWidth = 100 / totalNumberOfColumns!;

  useEffect(() => {
    if (onRowSelection) {
      onRowSelection(isRowSelected);
    }
  }, [isRowSelected])

  return (
    <div
      className={[styles.rowMainContainer, mainContainerClassName].join(' ')}
      style={{
        borderBottom: underline
          ? `solid 1px ${theme === 'Dark' ? '#4e4e4e55' : '#b9b9b953'}`
          : 'solid 0px transparent',
        paddingLeft: checkboxSelection ? '40px' : '0px',
      }}
    >
      {checkboxSelection && type === 'body' && (
        <div className={styles.checkboxContainer}>
          <Checkbox onChange={(val) => setIsRowSelected(val)} />
        </div>
      )}
      {items?.map((item, index) => (
        <div
          className={styles.cell}
          style={{
            width: `${(item?.numberOfColumns || 1) * columnWidth}%`,
            justifyContent,
          }}
        >
          {['string', 'number'].includes(typeof item?.content) ? (
            <Typography type={type === 'header' ? 'paragraph' : 'paragraph2'}>
              {item?.content as string}
            </Typography>
          ) : (
            item?.content
          )}
          {item?.options?.length && type === 'header' && (
            <Menu
              width={item?.optionsMenuWidth || 'fit-content'}
              position={index === items.length - 1 ? 'left' : 'right'}
              items={item.options.map((option) => ({
                title: option.item,
                onClick: option.action,
              }))}
              menuIcon={
                item?.optionsMenuIcon || (
                  <OptionsIcon width={15} height={15} fill='gray' />
                )
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

TableRow.defaultProps = defaultProps;
