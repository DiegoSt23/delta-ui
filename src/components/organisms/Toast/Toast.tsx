/* eslint-disable react-hooks/exhaustive-deps */
import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useTheme } from '../../../context';
import { Alert, AlertProps } from '../../molecules';
import styles from './toast.module.scss';

export interface ToastRefProps {
  handleDisplayToast: () => void;
}

export interface ToastProps extends AlertProps {
  position?:
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft'
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
  position: 'topRight',
  clearAfter: 5000,
};

export const Toast = forwardRef<ToastRefProps, ToastProps>(
  (
    {
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
    },
    ref
  ) => {
    const { theme } = useTheme();
    const [displayLocalToast, setDisplayLocalToast] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(0);
    const [translateX, setTranslateX] = useState<number>(
      ['topRight', 'bottomRight'].includes(position || 'topRight') ? 30 : -30
    );
  
    useImperativeHandle(ref, () => {
      return {
        handleDisplayToast,
      };
    });

    const handleDisplayToast = () => {
      setDisplayLocalToast(true);
    };

    useEffect(() => {
      if (displayLocalToast) {
        setTimeout(() => {
          setOpacity(1);
          setTranslateX(0);
        }, 200);

        setTimeout(
          () => {
            setOpacity(0);
            setTranslateX(
              ['topRight', 'bottomRight'].includes(position || 'topRight')
                ? 30
                : -30
            );
          },
          clearAfter ? clearAfter - 200 : 4800
        );

        setTimeout(() => {
          setDisplayLocalToast(false);
        }, clearAfter ?? 5000);
      } else {
        setOpacity(0);
        setTranslateX(
          ['topRight', 'bottomRight'].includes(position || 'topRight')
            ? 30
            : -30
        );
      }
    }, [displayLocalToast]);

    return (
      displayLocalToast && (
        <div className={styles[position || 'topRight']}>
          <div
            className={styles[`toast${theme}`]}
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
  }
);

Toast.defaultProps = defaultProps;
