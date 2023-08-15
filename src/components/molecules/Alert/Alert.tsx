import { ReactNode } from 'react';
import {  
  Success,
  Info,
  Warning,
  Error,
} from '../../../assets/icons';
import { Typography } from '../../atoms';
import styles from './alert.module.scss';

const icons = {
  success: <Success stroke='#60e02d' width={20} height={20} />,
  info: <Info stroke='#4567ff' fill='#4567ff' width={20} height={20} />,
  warning: <Warning stroke='#eeca2a' fill='#eeca2a' width={20} height={20} />,
  error: <Error fill='#ff1b63' stroke='#ff1b63' width={20} height={20} />,
};

const bgColors = {
  success: '-webkit-linear-gradient(45deg,#60e02d31,#60e02d10)',
  info: '-webkit-linear-gradient(45deg,#4567ff4c,#4567ff18)',
  warning: '-webkit-linear-gradient(45deg,#eeca2a33,#eeca2a10)',
  error: '-webkit-linear-gradient(45deg,#fe24a33f,#fe24a311)',
};

const borderColors = {
  success: '#132c09',
  info: '#131d47',
  warning: '#2e2708',
  error: '#370823',
};

export interface AlertProps {
  text: string;
  title?: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  customIcon?: ReactNode;
  action?: () => void;
  actionElement?: ReactNode;
  mainContainerClassName?: string;
  textClassName?: string;
}

const defaultProps: Partial<AlertProps> = {
  title: '',
  variant: 'info',
  customIcon: undefined,
  action: undefined,
  actionElement: undefined,
  mainContainerClassName: undefined,
  textClassName: undefined,
};

export const Alert = ({
  text,
  title,
  variant,
  customIcon,
  action,
  actionElement,
  mainContainerClassName,
  textClassName,
}: AlertProps) => (
  <div
    className={[styles.alertMainContainer, mainContainerClassName].join(' ')}
    style={{ background: bgColors[variant || 'info'], border: `solid 1px ${borderColors[variant || 'info']}` }}
  >
    {customIcon || icons[variant || 'info']}
    <div
      className={styles.subContainer}
    >
      <div className={styles.textContainer}>
        {title && (
          <Typography
            className={[styles[variant || 'info'], textClassName].join(' ')}
            type='paragraph'
          >
            {title}
          </Typography>
        )}
        <Typography
          className={[styles[variant || 'info'], textClassName].join(' ')}
          type='paragraph2'
        >
          {text}
        </Typography>
      </div>
      {action && actionElement && (
        <button onClick={action} className={styles.actionButton}>
          {actionElement}
        </button>
      )}
    </div>
  </div>
);

Alert.defaultProps = defaultProps;
