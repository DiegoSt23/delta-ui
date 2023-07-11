import styles from './typography.module.scss';

export interface TypographyProps {
  children: string;
  type?:
  'heading1'
  | 'heading2'
  | 'heading3'
  | 'subtitle'
  | 'paragraph'
  | 'paragraph2',
  className?: string;
  upperCase?: boolean;
}

const defaultProps: Partial<TypographyProps> = {
  type: 'paragraph',
  upperCase: false,
};

export const Typography = ({
  children,
  type,
  className,
  upperCase,
}: TypographyProps) => (
  <p className={[styles[type || 'paragraph'], className].join(' ')}>
    {upperCase ? children.toUpperCase() : children}
  </p>
);

Typography.defaultProps = defaultProps;
