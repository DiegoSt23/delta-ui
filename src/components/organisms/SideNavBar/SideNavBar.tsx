import { ReactNode } from 'react';
import { NavBarItem, NavBarItemProps } from '../../molecules';
import styles from './side-nav-bar.module.scss';

export interface SideNavBarProps {
  items: NavBarItemProps[];
  mainIcon?: ReactNode;
  onClickMainIcon?: () => void;
  itemsPosition?: 'center' | 'start';
  mainContainerClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}
const defaultProps: Partial<SideNavBarProps> = {
  mainIcon: undefined,
  onClickMainIcon: undefined,
  itemsPosition: 'center',
  mainContainerClassName: undefined,
  itemClassName: undefined,
  activeItemClassName: undefined,
};

export const SideNavBar = ({
  items,
  mainIcon,
  onClickMainIcon,
  itemsPosition,
  mainContainerClassName,
  itemClassName,
  activeItemClassName,
}: SideNavBarProps) => (
  <div className={[styles.mainContainer, mainContainerClassName].join(' ')}>
    {mainIcon && (
      <button
        className={styles.mainIcon}
        onClick={onClickMainIcon || undefined}
      >
        {mainIcon}
      </button>
    )}
    <div className={styles[itemsPosition || 'center']}>
      {items?.map((item) => (
        <NavBarItem
          key={item.name}
          {...item}
          className={itemClassName}
          activeClassName={activeItemClassName}
        />
      ))}
    </div>
  </div>
);

SideNavBar.defaultProps = defaultProps;
