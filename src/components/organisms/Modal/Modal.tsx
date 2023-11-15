/* eslint-disable react-hooks/exhaustive-deps */
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
  const [scale, setScale] = useState<number>(0);
  const [backdropColor, setBackdropColor] = useState<string>('transparent');

  useEffect(() => {
    if (isOpen) {
      setIsOpenLocal(true);
      setDisplay('block');
      setBackdropColor(theme === 'Dark' ? '#000000e1' : '#ffffffe1');
      setTimeout(() => {
        setScale(1);
      }, 100);
    } else {
      setScale(0);
      setBackdropColor('transparent');
      setTimeout(() => {
        setIsOpenLocal(false);
        setDisplay('none');
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      {isOpenLocal && (
        <div
          className={styles.backdrop}
          style={{
            background: backdropColor,
            backdropFilter: 'blur(2px)',
          }}
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles[`${size}${theme}` || 'mdDark']}
            style={{
              display,
              transform: `scale(${scale})`,
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
