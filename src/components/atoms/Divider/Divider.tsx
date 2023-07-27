import styles from './divider.module.scss';

export interface DividerProps {
  variant?: 'horizontal' | 'vertical';
  margin?: number;
  height?: number;
}

const defaultProps: Partial<DividerProps> = {
  variant: 'horizontal',
  margin: 20,
  height: 200,
};

export const Divider = ({
  variant,
  margin,
  height
}: DividerProps) => (
  <div
    className={styles[variant || 'horizontal']}
    style={{
      margin: variant === 'horizontal' ? `${margin}px 0px` : `0px ${margin}px`,
      height: variant === 'horizontal' ? 'auto' : `${height}px`
    }}
  />
);

Divider.defaultProps = defaultProps;
