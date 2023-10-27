import { ReactNode } from 'react'; 
import { useTheme } from '../../../context';
import { Tooltip } from '../../atoms';
import styles from './nav-bar-item.module.scss';

export interface NavBarItemProps {
  name: string;
  icon: ReactNode;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  render?: ({
    icon,
    isActive,
  }: {
    icon: ReactNode;
    isActive: boolean;
  }) => ReactNode;
}

const defaultProps: Partial<NavBarItemProps> = {
  onClick: undefined,
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
}: NavBarItemProps) => {
  const theme = useTheme();

  return (
    <Tooltip tooltipContent={name} position='right'>
      {render ? (
        render({ icon, isActive })
      ) : (
        <button
          className={`${
            isActive
              ? activeClassName || styles[`buttonActive${theme}`]
              : className || styles[`button${theme}`]
          }`}
          onClick={onClick}
        >
          {icon}
        </button>
      )}
    </Tooltip>
  );
};

NavBarItem.defaultProps = defaultProps;
