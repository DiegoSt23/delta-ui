import { ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  children: string | ReactNode;
  onClick: () => void;
  variant?: 'hollow' | 'filled' | 'text';
  small?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'prefix' | 'suffix';
  type?: 'button' | 'submit';
  className?: string;
}

const defaultProps: Partial<ButtonProps> = {
  variant: 'hollow',
  small: false,
  disabled: false,
  fullWidth: false,
  icon: undefined,
  iconPosition: 'prefix',
  type: 'button',
  className: undefined,
};

export const Button = ({
  variant,
  small,
  children,
  onClick,
  disabled,
  fullWidth,
  icon,
  iconPosition,
  type,
  className,
}: ButtonProps) => (
  <button
    style={{
      width: fullWidth ? '100%' : 'fit-content',
      padding: variant !== 'text'
        ? small ? '5px 10px' : '10px 15px'
        : '0px',
    }}
    className={[styles[variant || 'default'], className].join(' ')}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {icon && iconPosition === 'prefix' && icon}
    {children}
    {icon && iconPosition === 'suffix' && icon}
  </button>
);

Button.defaultProps = defaultProps;
