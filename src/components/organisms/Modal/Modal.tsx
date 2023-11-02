import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Close } from '../../../assets/icons';
import { Card, CardProps } from '../../molecules';
import styles from './modal.module.scss';

export interface ModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  customCloseIcon?: ReactNode;
}

const defaultProps: Partial<ModalProps> = {
  size: 'md',
  headerTitle: undefined,
  footer: undefined,
  customCloseIcon: undefined,
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  headerTitle,
  footer,
  mainContainerClassName,
  headerClassName,
  footerClassName,
  size,
  customCloseIcon,
}: ModalProps) => {
  const { theme } = useTheme();
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>('none');
  const [top, setTop] = useState<number | undefined>(-100);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setIsOpenLocal(true);
      setDisplay('block');
      setTimeout(() => {
        setOpacity(1);
      }, 300);
      setTimeout(() => {
        setTop(0);
      }, 300);
    } else {
      setTop(-100);
      setOpacity(0);
      setTimeout(() => {
        setIsOpenLocal(false);
        setDisplay('none');
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      {isOpenLocal && (
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
            className={styles[`${size}${theme}` || 'mdDark']}
            style={{
              display,
              top: `${top}vh`,
            }}
          >
            <Card
              headerTitle={headerTitle}
              headerElement={
                <button className={styles.closeButton} onClick={onClose}>
                  {customCloseIcon || (
                    <Close width={20} height={20} fill='gray' />
                  )}
                </button>
              }
              footer={footer}
              mainContainerClassName={[
                styles.modalCardStyles,
                mainContainerClassName,
              ].join(' ')}
              headerClassName={headerClassName}
              footerClassName={footerClassName}
              fullWidth
            >
              {children}
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = defaultProps;
