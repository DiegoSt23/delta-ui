import { ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Typography } from '../Typography';
import styles from './link.module.scss';

export interface LinkProps {
  href: string;
  children: string | ReactNode;
  target?: '_self' | '_blank'
  download?: boolean;
  variant: 'subtitle' | 'paragraph' | 'paragraph2';
  textDecoration?: 'underline' | 'default';
  className?: string;
  typographyClassName?: string;
}

const defaultProps: Partial<LinkProps> = {
  target: '_self',
  download: false,
  variant: 'paragraph',
  textDecoration: 'default',
  className: undefined,
  typographyClassName: undefined,
};

export const Link = ({
  href,
  children,
  target,
  download,
  variant,
  textDecoration,
  className,
  typographyClassName,
}: LinkProps) => {
  const theme = useTheme();

  return (
    <a
      href={href}
      className={[
        styles[`${textDecoration || 'default'}${theme}`],
        className,
      ].join(' ')}
      target={target}
      download={download}
    >
      {['string', 'number'].includes(typeof children) ? (
        <Typography
          className={[
            styles[`typographyStyle${theme}`],
            typographyClassName,
          ].join(' ')}
          type={variant}
        >
          {children as string}
        </Typography>
      ) : (
        children
      )}
    </a>
  );
};

Link.defaultProps = defaultProps;
