/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { useTheme } from '../../../context';
import styles from './drawer.module.scss';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  header?: string | ReactNode
  position?: 'left' | 'right' | 'top' | 'bottom';
  className?: string,
}

const defaultProps: Partial<DrawerProps> = {
  header: undefined,
  position: 'left',
  className: undefined,
};

export const Drawer = ({
  isOpen,
  onClose,
  children,
  position,
  className,
}: DrawerProps) => {
  const { theme } = useTheme();
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>('none');
  const [translate, setTranslate] = useState<string>('100%');
  const [backdropColor, setBackdropColor] = useState<string>('transparent');

  const handleTranslate = () => {
    if (position === 'left') {
      return {
        left: 0,
        transform: `translateX(-${translate})`,
      };
    }

    if (position === 'top') {
      return {
        top: 0,
        transform: `translateY(-${translate})`,
      };
    }

    if (position === 'bottom') {
      return {
        bottom: 0,
        transform: `translateY(${translate})`,
      };
    }

    return {
      right: 0,
      transform: `translateX(${translate})`,
    };
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpenLocal(true);
      setDisplay('block');
      setBackdropColor(theme === 'Dark' ? '#000000e1' : '#ffffffe1');
      // setTimeout(() => {
      //   setOpacity(1);
      // }, 300);
      setTimeout(() => {
        setTranslate('0%');
      }, 300);
    } else {
      setTranslate('100%');
      setBackdropColor('transparent');
      setTimeout(() => {
        setIsOpenLocal(false);
        setDisplay('none');
      }, 300);
    }
  }, [isOpen]);

  return (
    isOpenLocal && (
      <div
        className={styles.backdrop}
        style={{
          // opacity,
          background: backdropColor,
          backdropFilter: 'blur(2px)',
        }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={[styles[`${position}${theme}` || 'left'], className].join(' ')}
          style={{
            display,
            ...handleTranslate(),
          }}
        >
          {children}
        </div>
      </div>
    )
  );
};

Drawer.defaultProps = defaultProps;
