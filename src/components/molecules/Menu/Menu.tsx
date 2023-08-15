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
  position?: 'left' | 'right';
  optionsContainerClassName?: string;
  optionsClassName?: string;
}

const defaultProps: Partial<MenuProps> = {
  menuIcon: undefined,
  width: 200,
  position: 'right',
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
  const [scale, setScale] = useState<number>(0);
  const [optionsTranslateX, setOptionsTranslateX] = useState<number>(-30);
  const [optionsOpacity, setOptionsOpacity] = useState<number>(0);

  const handleDisplayMenu = (val: boolean) => setIsOpen(val);

  const handleResetValues = () => {
    setOptionsTranslateX(-30);
    setOptionsOpacity(0);

    setTimeout(() => {
      setOpacity(0);
      setScale(0);
    }, 300);

    setTimeout(() => {
      handleDisplayMenu(false);
    }, 600);
  };

  const handleOpenMenu = () => {
    if (isOpen) {
      handleResetValues();
    } else {
      handleDisplayMenu(true);
      setTimeout(() => {
        setOpacity(1);
        setScale(1);
      }, 100);
      setTimeout(() => {
        setOptionsTranslateX(0);
        setOptionsOpacity(1);
      }, 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleResetValues();
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
        {menuIcon || <DefaultIcon color='gray' width={20} height={20} />}
      </button>
      {isOpen && (
        <div
          className={[
            styles[position || 'right'],
            optionsContainerClassName,
          ].join(' ')}
          style={{
            width,
            opacity,
            transform: `scale(${scale})`,
          }}
        >
          {items?.map((item) => (
            <div
              className={styles.menuItem}
              style={{
                transform: `translateX(${optionsTranslateX}px)`,
                opacity: optionsOpacity,
              }}
            >
              <MenuItem
                {...item}
                onClick={() => {
                  item.onClick();
                  handleOpenMenu();
                }}
                className={optionsClassName}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = defaultProps;
