import { ReactNode } from 'react'; 
import { Tooltip } from '../../atoms';
import styles from './nav-bar-item.module.scss';

export interface NavBarItemProps {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  activeClassName?: string;
  render?: (name: string, icon: ReactNode, isActive: boolean) => ReactNode;
}

const defaultProps: Partial<NavBarItemProps> = {
  onClick: undefined,
  isActive: false,
  className: undefined,
  activeClassName: undefined,
  render: undefined,
};

export const NavBarItem = ({
  name,
  icon,
  onClick,
  isActive,
  className,
  activeClassName,
  render,
}: NavBarItemProps) => (
  <Tooltip tooltipContent={name} position='right'>
    {render ? (
      render(name, icon, isActive || false)
    ) : (
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
    )}
  </Tooltip>
);

NavBarItem.defaultProps = defaultProps;
