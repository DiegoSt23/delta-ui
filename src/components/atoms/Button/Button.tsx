import { ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  children: string | ReactNode;
  onClick: () => void;
  variant?: 'default' | 'text';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'prefix' | 'suffix';
  className?: string;
}

const defaultProps: Partial<ButtonProps> = {
  variant: 'default',
  disabled: false,
  fullWidth: false,
  icon: undefined,
  iconPosition: 'prefix',
  className: undefined,
};

export const Button = ({
  variant,
  children,
  onClick,
  disabled,
  fullWidth,
  icon,
  iconPosition,
  className,
}: ButtonProps) => (
  <button
    style={{ width: fullWidth ? '100%' : 'fit-content' }}
    className={[styles[variant || 'default'], className].join(' ')}
    onClick={onClick}
    disabled={disabled}
  >
    {icon && iconPosition === 'prefix' && icon}
    {children}
    {icon && iconPosition === 'suffix' && icon}
  </button>
);

Button.defaultProps = defaultProps;
