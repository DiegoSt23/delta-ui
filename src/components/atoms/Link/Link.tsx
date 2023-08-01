import { ReactNode } from 'react';
import { Typography } from '../Typography';
import styles from './link.module.scss';

export interface LinkProps {
  href: string;
  children: string | ReactNode;
  variant: 'subtitle' | 'paragraph' | 'paragraph2';
  textDecoration?: 'underline' | 'default';
  className?: string;
  typographyClassName?: string;
}

const defaultProps: Partial<LinkProps> = {
  variant: 'paragraph',
  textDecoration: 'default',
  className: undefined,
  typographyClassName: undefined,
};

export const Link = ({
  href,
  children,
  variant,
  textDecoration,
  className,
  typographyClassName,
}: LinkProps) => (
  <a
    href={href}
    className={[styles[textDecoration || 'default'], className].join(' ')}
    target='blank'
  >
    {['string', 'number'].includes(typeof children) ? (
      <Typography
        className={[styles.typographyStyle, typographyClassName].join(' ')}
        type={variant}
      >
        {children as string}
      </Typography>
    ) : (
      children
    )}
  </a>
);

Link.defaultProps = defaultProps;
