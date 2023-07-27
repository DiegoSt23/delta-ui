import { ReactNode } from 'react'; 
import { Tooltip } from '../../atoms';
import styles from './nav-bar-item.module.scss';

export interface NavBarItemProps {
  name: string;
  icon: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
  activeClassName?: string;
}

const defaultProps: Partial<NavBarItemProps> = {
  isActive: false,
  className: undefined,
  activeClassName: undefined,
};

export const NavBarItem = ({
  name,
  icon,
  onClick,
  isActive,
  className,
  activeClassName,
}: NavBarItemProps) => (
  <Tooltip tooltipContent={name} position='right'>
    <button
      className={`${
        isActive
          ? activeClassName || styles.buttonActive
          : className || styles.button
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  </Tooltip>
);

NavBarItem.defaultProps = defaultProps;
