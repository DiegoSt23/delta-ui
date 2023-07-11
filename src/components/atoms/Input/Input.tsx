/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { PiEyeClosedBold } from 'react-icons/pi';
import { RiEye2Line } from 'react-icons/ri';
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
  containerClassName,
  inputClassName,
}: InputProps) => {
  const [text, setText] = useState<string>(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputType = showPassword && type === 'password'
    ? 'text'
    : !showPassword && type === 'password'
      ? 'password'
      : 'text';

  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    onChange(text);
  }, [text]);

  return (
    <div
      className={styles.mainContainer}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {label && <p className={styles.label}>{label}</p>}
      <div
        className={[styles.inputContainer, containerClassName].join(' ')}
        style={{ borderColor: error ? '#ff1b63' : '#80808044' }}
      >
        <input
          type={inputType}
          value={text}
          placeholder={placeholder}
          name={name}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          className={[styles.input, inputClassName].join(' ')}
          style={{
            width: buttonContent ? '90%' : '100%',
            padding: buttonContent ? '10px 0px 10px 10px' : '10px',
          }}
        />
        {buttonContent && type !== 'password' && (
          <Button disabled={disabled} onClick={buttonOnClick}>
            {buttonContent}
          </Button>
        )}
        {type === 'password' && (
          <Button disabled={disabled} onClick={handleShowPassword}>
            {showPassword ? <RiEye2Line /> : <PiEyeClosedBold />}
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
