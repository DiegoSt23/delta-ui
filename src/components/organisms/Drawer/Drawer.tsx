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
  size?: number;
  className?: string,
}

const defaultProps: Partial<DrawerProps> = {
  header: undefined,
  position: 'left',
  size: 300,
  className: undefined,
};

export const Drawer = ({
  isOpen,
  onClose,
  children,
  position,
  size,
  className,
}: DrawerProps) => {
  const { theme } = useTheme();
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>('none');
  const [translate, setTranslate] = useState<number>(size ?? 300);
  const [backdropColor, setBackdropColor] = useState<string>('transparent');

  const handleTranslate = () => {
    if (position === 'left') {
      return {
        transform: `translateX(-${translate}px)`,
      };
    }

    if (position === 'top') {
      return {
        transform: `translateY(-${translate}px)`,
      };
    }

    if (position === 'bottom') {
      return {
        transform: `translateY(${translate}px)`,
      };
    }

    return {
      transform: `translateX(${translate}px)`,
    };
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpenLocal(true);
      setDisplay('block');
      setBackdropColor(theme === 'Dark' ? '#000000e1' : '#ffffffe1');
      setTimeout(() => {
        setTranslate(0);
      }, 300);
    } else {
      setTranslate(size ?? 300);
      setBackdropColor('transparent');
      setTimeout(() => {
        setIsOpenLocal(false);
        setDisplay('none');
      }, 300);
    }
  }, [isOpen, theme, size]);

  return (
    isOpenLocal && (
      <div
        className={styles.backdrop}
        style={{
          background: backdropColor,
          backdropFilter: 'blur(2px)',
          justifyContent: ['left', 'right'].includes(position ?? 'top')
            ? position === 'left'
              ? 'flex-start'
              : 'flex-end'
            : '',
          alignItems: ['top', 'bottom'].includes(position ?? 'top')
            ? position === 'top'
              ? 'flex-start'
              : 'flex-end'
            : '',
        }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={[styles[`${position}${theme}` || 'left'], className].join(' ')}
          style={{
            display,
            width: ['top', 'bottom'].includes(position ?? 'top')
              ? '100%'
              : size,
            height: ['left', 'right'].includes(position ?? 'top')
              ? '100%'
              : size,
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
