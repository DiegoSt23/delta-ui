import { ReactNode } from 'react';
import { NavBarItem, NavBarItemProps } from '../../molecules';
import styles from './side-nav-bar.module.scss';

export interface SideNavBarProps {
  items: NavBarItemProps[];
  bottomItems?: NavBarItemProps[];
  mainIcon?: ReactNode;
  onClickMainIcon?: () => void;
  mainContainerClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}
const defaultProps: Partial<SideNavBarProps> = {
  bottomItems: [],
  mainIcon: undefined,
  onClickMainIcon: undefined,
  mainContainerClassName: undefined,
  itemClassName: undefined,
  activeItemClassName: undefined,
};

export const SideNavBar = ({
  items,
  bottomItems,
  mainIcon,
  onClickMainIcon,
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
    <div className={styles.itemsContainer} style={{ paddingTop: mainIcon ?  70 : 0 }}>
      <div
        className={styles.itemsSubContainer}
      >
        {items?.map((item) => (
          <NavBarItem
            key={item.name}
            {...item}
            className={itemClassName}
            activeClassName={activeItemClassName}
          />
        ))}
      </div>
      {bottomItems?.length && (
        <div className={styles.itemsSubContainer}>
          {bottomItems?.map((item) => (
            <NavBarItem
              key={item.name}
              {...item}
              className={itemClassName}
              activeClassName={activeItemClassName}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

SideNavBar.defaultProps = defaultProps;
