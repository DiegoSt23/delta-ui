import { ReactNode } from 'react';
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
        className={[styles.button, className].join(' ')}
        onClick={onClick}
      >
        <div className={styles.titleContainer}>
          {icon || null}
          <p className={styles.title}>{title}</p>
        </div>
        {description && (
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </button>
    </div>
  );
};

MenuItem.defaultProps = defaultProps;
