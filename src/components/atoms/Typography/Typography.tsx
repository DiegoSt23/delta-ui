import { useTheme } from '../../../context';
import styles from './typography.module.scss';

export interface TypographyProps {
  children: string;
  type?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'subtitle'
    | 'paragraph'
    | 'paragraph2'
    | 'paragraph3';
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
}: TypographyProps) => {
  const { theme } = useTheme();

  return (
    <p className={[styles[`${type}${theme}` || 'paragraphDark'], className].join(' ')}>
      {upperCase ? children.toUpperCase() : children}
    </p>
  );
};

Typography.defaultProps = defaultProps;
