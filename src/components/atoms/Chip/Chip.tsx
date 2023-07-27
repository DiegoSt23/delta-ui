import { ReactNode } from 'react';
import { Typography } from '../Typography';
import styles from './chip.module.scss';

export interface ChipProps {
  children: string;
  color?: 'primary' | 'green' | 'blue' | 'pink' | 'yellow' | 'purple';
  icon?: ReactNode;
  iconPosition?: 'prefix' | 'suffix';
}

const defaultProps: Partial<ChipProps> = {
  color: 'primary',
  icon: undefined,
  iconPosition: 'prefix',
};

export const Chip = ({
  children,
  color,
  icon,
  iconPosition
}: ChipProps) => (
  <div className={styles[color || 'primary']}>
    {icon && iconPosition === 'prefix' && icon}
    <Typography type='paragraph2' className={styles.text}>
      {children}
    </Typography>
    {icon && iconPosition === 'suffix' && icon}
  </div>
);

Chip.defaultProps = defaultProps;
