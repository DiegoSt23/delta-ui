import { useState, useEffect } from 'react';
import { Card, CardProps } from '../../molecules';
import styles from './modal.module.scss';

export interface ModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
}

const defaultProps: Partial<ModalProps> = {
  size: 'md',
  headerTitle: undefined,
  headerElement: undefined,
  footer: undefined,
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  headerTitle,
  headerElement,
  footer,
  mainContainerClassName,
  headerClassName,
  footerClassName,
  size,
}: ModalProps) => {
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
          style={{ opacity }}
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles[size || 'md']}
            style={{
              display,
              top: `${top}vh`,
            }}
          >
            <Card
              headerTitle={headerTitle}
              headerElement={headerElement}
              footer={footer}
              mainContainerClassName={mainContainerClassName}
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
