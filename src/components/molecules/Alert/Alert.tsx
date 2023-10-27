import { ReactNode } from 'react';
import { useTheme } from '../../../context';
import {  
  Success,
  Info,
  Warning,
  Error,
} from '../../../assets/icons';
import { Typography } from '../../atoms';
import styles from './alert.module.scss';

const iconsLight = {
  success: <Success stroke='#3c891d' width={20} height={20} />,
  info: <Info stroke='#495ebc' fill='#495ebc' width={20} height={20} />,
  warning: <Warning stroke='#a2891a' fill='#a2891a' width={20} height={20} />,
  error: <Error fill='#c73463' stroke='#c73463' width={20} height={20} />,
};

const iconsDark = {
  success: <Success stroke='#60e02d' width={20} height={20} />,
  info: <Info stroke='#4567ff' fill='#4567ff' width={20} height={20} />,
  warning: <Warning stroke='#eeca2a' fill='#eeca2a' width={20} height={20} />,
  error: <Error fill='#ff1b63' stroke='#ff1b63' width={20} height={20} />,
};

const bgColorsLight = {
  success: '-webkit-linear-gradient(45deg,#60e02d79,#60e02d28)',
  info: '-webkit-linear-gradient(45deg,#4567ff80,#4567ff28)',
  warning: '-webkit-linear-gradient(45deg,#eeca2a7e,#eeca2a27)',
  error: '-webkit-linear-gradient(45deg,#fe24a368,#fe24a329)',
};

const bgColorsDark = {
  success: '-webkit-linear-gradient(45deg,#60e02d31,#60e02d10)',
  info: '-webkit-linear-gradient(45deg,#4567ff4c,#4567ff18)',
  warning: '-webkit-linear-gradient(45deg,#eeca2a33,#eeca2a10)',
  error: '-webkit-linear-gradient(45deg,#fe24a33f,#fe24a311)',
};

const borderColorsLight = {
  success: '#60e02d79',
  info: '#9eaef880',
  warning: '#eeca2a7e',
  error: '#fe24a37e',
};

const borderColorsDark = {
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
  fullWidth?: boolean;
  mainContainerClassName?: string;
  textClassName?: string;
}

const defaultProps: Partial<AlertProps> = {
  title: '',
  variant: 'info',
  customIcon: undefined,
  action: undefined,
  actionElement: undefined,
  fullWidth: false,
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
  fullWidth,
  mainContainerClassName,
  textClassName,
}: AlertProps) => {
  const theme = useTheme();

  return (
    <div
      className={[styles.alertMainContainer, mainContainerClassName].join(' ')}
      style={{
        background:
          theme === 'Light'
            ? bgColorsLight[variant || 'info']
            : bgColorsDark[variant || 'info'],
        border: `solid 1px ${
          theme === 'Light'
            ? borderColorsLight[variant || 'info']
            : borderColorsDark[variant || 'info']
        }`,
        width: fullWidth ? '100%' : 'fit-content',
      }}
    >
      {customIcon ? customIcon : theme === 'Light'
        ? iconsLight[variant || 'info']
        : iconsDark[variant || 'info']}
      <div className={styles.subContainer}>
        <div className={styles.textContainer}>
          {title && (
            <Typography
              className={[
                styles[`${variant}${theme}` || 'infoDark'],
                textClassName,
              ].join(' ')}
              type='paragraph'
            >
              {title}
            </Typography>
          )}
          <Typography
            className={[
              styles[`${variant}${theme}` || 'infoDark'],
              textClassName,
            ].join(' ')}
            type='paragraph2'
          >
            {text}
          </Typography>
        </div>
        {action && actionElement && (
          <button onClick={action} className={styles[`actionButton${theme}`]}>
            {actionElement}
          </button>
        )}
      </div>
    </div>
  );
};

Alert.defaultProps = defaultProps;
