import styles from './spinner.module.scss';

export interface SpinnerProps {
  variant?: 'spin' | 'spin2' | 'doubleSpin' | 'pulse' | 'pulse2' | 'dots';
  size?: 'sm' | 'md' | 'lg';
}

const defaultProps: SpinnerProps = {
  variant: 'spin',
  size: 'md',
};

export const Spinner = ({ variant, size }: SpinnerProps) => (
  <div className={styles[variant || 'one']}>
    <div className={styles[size || 'md']} />
  </div>
);

Spinner.defaultProps = defaultProps;
