/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactNode,
  useState,
  FocusEventHandler,
} from 'react';
import { useTheme } from '../../../context';
import { EyeClosed, Eye } from '../../../assets/icons';
import { Button } from '../Button';
import styles from './input.module.scss';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password';
  placeholder?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  buttonContent?: string | ReactNode;
  buttonOnClick?: () => void;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  maxLength?: number;
  minLength?: number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  containerClassName?: string;
  inputClassName?: string;
}

const defaultProps: Partial<InputProps> = {
  type: 'text',
  name: '',
  placeholder: 'Placeholder',
  label: '',
  disabled: false,
  buttonContent: undefined,
  fullWidth: false,
  helperText: '',
  maxLength: undefined,
  minLength: undefined,
  onBlur: undefined,
  onFocus: undefined,
  containerClassName: undefined,
  inputClassName: undefined,
};

export const Input = ({
  value,
  onChange,
  type,
  name,
  placeholder,
  label,
  disabled,
  buttonContent,
  buttonOnClick,
  fullWidth,
  helperText,
  error,
  maxLength,
  minLength,
  onBlur,
  onFocus,
  containerClassName,
  inputClassName,
}: InputProps) => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputType = showPassword && type === 'password'
    ? 'text'
    : !showPassword && type === 'password'
      ? 'password'
      : 'text';

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div
      className={styles.mainContainer}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {label && <p className={styles.label}>{label}</p>}
      <div
        className={[styles[`inputContainer${theme}`], error && styles.errorBorder, containerClassName].join(' ')}
      >
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={onBlur}
          onFocus={onFocus}
          className={[styles.input, inputClassName].join(' ')}
          style={{
            width: buttonContent ? '90%' : '100%',
            padding: buttonContent ? '10px 0px 10px 10px' : '10px',
          }}
        />
        {buttonContent && type !== 'password' && (
          <Button disabled={disabled} onClick={buttonOnClick} variant='filled'>
            {buttonContent}
          </Button>
        )}
        {type === 'password' && (
          <Button
            disabled={disabled}
            onClick={handleShowPassword}
            variant='filled'
          >
            {showPassword ? (
              <Eye width={15} height={15} />
            ) : (
              <EyeClosed width={15} height={15} />
            )}
          </Button>
        )}
      </div>
      {helperText && (
        <p
          className={styles.helperText}
          style={{ color: error ? '#ff1b63' : '#888888' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = defaultProps;
