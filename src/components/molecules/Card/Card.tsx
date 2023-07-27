import { ReactNode } from 'react';
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
  footerClassName?: string;
}

const defaultProps: Partial<CardProps> = {
  headerTitle: undefined,
  headerElement: undefined,
  footer: undefined,
  fullWidth: false,
  mainContainerClassName: undefined,
  headerClassName: undefined,
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
  footerClassName,
}: CardProps) => {
  return (
    <div
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
      className={[styles.mainContainer, mainContainerClassName].join(' ')}
    >
      {headerTitle && (
        <div className={[styles.header, headerClassName].join(' ')}>
          <Typography type='heading3' className={styles.title}>
            {headerTitle}
          </Typography>
          {headerElement || null}
        </div>
      )}
      {children}
      {footer && <div className={[styles.footer, footerClassName].join(' ')}>{footer}</div>}
    </div>
  );
};

Card.defaultProps = defaultProps;
