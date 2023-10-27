import { ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Typography } from '..';
import styles from './list-item.module.scss';

export interface MenuItemProps {
  title: string;
  onClick: () => void;
  description?: string;
  icon?: ReactNode;
  underline?: boolean;
  className?: string;
}

const defaultProps: Partial<MenuItemProps> = {
  description: '',
  icon: undefined,
  underline: false,
  className: undefined,
};

export const MenuItem = ({
  title,
  description,
  icon,
  onClick,
  underline,
  className,
}: MenuItemProps) => {
  const theme = useTheme();

  return (
    <div
      className={styles.mainContainer}
      style={{
        borderBottom: `solid 1px ${underline ? '#80808044' : 'transparent'}`,
        paddingBottom: underline ? 5 : 0,
        marginBottom: underline ? 5 : 0,
      }}
    >
      <button
        className={[styles[`button${theme}`], className].join(' ')}
        onClick={onClick}
      >
        <div className={styles.titleContainer}>
          {icon || null}
          <Typography type="paragraph2" className={styles.title}>{title}</Typography>
        </div>
        {description && (
          <div className={styles.descriptionContainer}>
            <Typography type='paragraph3' className={styles.description}>
              {description}
            </Typography>
          </div>
        )}
      </button>
    </div>
  );
};

MenuItem.defaultProps = defaultProps;
