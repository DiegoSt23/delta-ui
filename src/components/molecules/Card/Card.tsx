import { ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Typography } from '../../atoms';
import styles from './card.module.scss';

export interface CardProps {
  children: ReactNode;
  headerTitle?: string;
  headerElement?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
  mainContainerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  footerClassName?: string;
}

const defaultProps: Partial<CardProps> = {
  headerTitle: undefined,
  headerElement: undefined,
  footer: undefined,
  fullWidth: false,
  mainContainerClassName: undefined,
  headerClassName: undefined,
  titleClassName: undefined,
  footerClassName: undefined,
};

export const Card = ({
  children,
  headerTitle,
  headerElement,
  footer,
  fullWidth,
  mainContainerClassName,
  headerClassName,
  titleClassName,
  footerClassName,
}: CardProps) => {
  const theme = useTheme();

  return (
    <div
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
      className={[styles[`mainContainer${theme}`], mainContainerClassName].join(' ')}
    >
      {(headerTitle || headerElement) && (
        <div
          className={[styles.header, headerClassName].join(' ')}
          style={{ justifyContent: headerTitle ? 'space-between' : 'flex-end' }}
        >
          {headerTitle && (
            <Typography
              type='heading3'
              className={[styles.title, titleClassName].join(' ')}
            >
              {headerTitle}
            </Typography>
          )}
          {headerElement || null}
        </div>
      )}
      {children}
      {footer && (
        <div className={[styles.footer, footerClassName].join(' ')}>
          {footer}
        </div>
      )}
    </div>
  );
};

Card.defaultProps = defaultProps;
