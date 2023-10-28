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
  const theme = useTheme();
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>('none');
  const [opacity, setOpacity] = useState<number>(0);
  const [translate, setTranslate] = useState<string>('-100%');

  const handleTranslate = () => {
    if (position === 'left') {
      return {
        left: translate,
      };
    }

    if (position === 'top') {
      return {
        top: translate,
      };
    }

    if (position === 'bottom') {
      return {
        bottom: translate,
      };
    }

    return {
      right: translate,
    };
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpenLocal(true);
      setDisplay('block');
      setTimeout(() => {
        setOpacity(1);
      }, 300);
      setTimeout(() => {
        setTranslate('0%');
      }, 300);
    } else {
      setTranslate('-100%');
      setOpacity(0);
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
          opacity,
          background: theme === 'Dark' ? '#000000e1' : '#ffffffe1',
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
