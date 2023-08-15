import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Alert, AlertProps } from '../../molecules';
import styles from './toast.module.scss';

export interface ToastProps extends AlertProps {
  displayToast: boolean;
  resetDisplayToast: Dispatch<SetStateAction<boolean>>;
  position?: 'top-right' | 'top-left' | ' center';
  clearAfter?: number;
}

const defaultProps: Partial<ToastProps> = {
  title: '',
  variant: 'info',
  customIcon: undefined,
  action: undefined,
  actionElement: undefined,
  mainContainerClassName: undefined,
  textClassName: undefined,
  position: 'top-right',
  clearAfter: 5000,
};

export const Toast = ({
  displayToast,
  resetDisplayToast,
  position,
  clearAfter,
  text,
  title,
  variant,
  customIcon,
  action,
  actionElement,
  mainContainerClassName,
  textClassName,
}: ToastProps) => {
  const [displayLocalToast, setDisplayLocalToast] = useState<boolean>(displayToast);
  const [opacity, setOpacity] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(30);

  useEffect(() => {
    if (displayLocalToast) {
      setTimeout(() => {
        setOpacity(1);
        setTranslateX(0);
      }, 200);

      setTimeout(() => {
        setOpacity(0);
        setTranslateX(30);
      }, 4800);

      setTimeout(() => {
        setDisplayLocalToast(false);
        resetDisplayToast(false);
      }, clearAfter);
    } else {
      setOpacity(0);
      setTranslateX(30);
    }
  }, [displayLocalToast]);

  useEffect(() => {
    setDisplayLocalToast(displayToast)
  }, [displayToast]);

  return (
    displayLocalToast && (
      <div className={styles.toastMainContainer}>
        <div
          className={styles.toastContainer}
          style={{ opacity, transform: `translateX(${translateX}px)` }}
        >
          <Alert
            text={text}
            title={title}
            variant={variant}
            customIcon={customIcon}
            action={action}
            actionElement={actionElement}
            mainContainerClassName={mainContainerClassName}
            textClassName={textClassName}
          />
        </div>
      </div>
    )
  );
};

Toast.defaultProps = defaultProps;
