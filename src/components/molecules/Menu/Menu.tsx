import {
  ReactNode,
  useState,
  useRef,
  useEffect,
} from 'react';
import { Menu as DefaultIcon } from '../../../assets/icons';
import { MenuItem, MenuItemProps } from '../../atoms';
import styles from './menu.module.scss';

export interface MenuProps {
  items: MenuItemProps[];
  menuIcon?: ReactNode;
  width?: number | string;
  position?: 'left' | 'center' | 'right';
  optionsContainerClassName?: string;
  optionsClassName?: string;
}

const defaultProps: Partial<MenuProps> = {
  menuIcon: undefined,
  width: 200,
  position: 'center',
  optionsContainerClassName: undefined,
  optionsClassName: undefined,
};

export const Menu = ({
  items,
  menuIcon,
  width,
  position,
  optionsContainerClassName,
  optionsClassName,
}: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);

  const handleDisplayMenu = (val: boolean) => setIsOpen(val);

  const handleOpenMenu = () => {
    if (isOpen) {
      setOpacity(0);
      setTimeout(() => {
        handleDisplayMenu(false);
      }, 300);
    } else {
      handleDisplayMenu(true);
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.mainContainer}>
      <button className={styles.menuIconContainer} onClick={handleOpenMenu}>
        {menuIcon || <DefaultIcon color='gray' width={25} height={25} />}
      </button>
      {isOpen && (
        <div
          className={[
            styles[position || 'center'],
            optionsContainerClassName,
          ].join(' ')}
          style={{
            width,
            opacity,
          }}
        >
          {items?.map((item) => (
            <MenuItem
              {...item}
              onClick={() => {
                item.onClick();
                handleOpenMenu();
              }}
              className={optionsClassName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = defaultProps;
