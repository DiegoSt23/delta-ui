/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Check } from '../../../assets/icons';
import { Typography } from '../Typography';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
  onChange: (val: boolean) => void;
  isDefaultChecked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  buttonClassName?: string;
  labelClassName?: string;
  checkedIcon?: ReactNode;
  checkedColor?: string;
}

const defaultProps: Partial<CheckboxProps> = {
  isDefaultChecked: false,
  disabled: false,
  size: 'md',
  label: '',
  buttonClassName: undefined,
  labelClassName: undefined,
  checkedIcon: undefined,
  checkedColor: '#d9d9d9',
};

const buttonSizes = {
  sm: 15,
  md: 20,
  lg: 25,
}

export const Checkbox = ({
  isDefaultChecked,
  onChange,
  disabled,
  size,
  label,
  buttonClassName,
  labelClassName,
  checkedIcon,
  checkedColor,
}: CheckboxProps) => {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(
    isDefaultChecked || false
  );

  const handleCheck = () => setIsChecked(!isChecked);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked]);

  return (
    <div className={styles.mainContainer}>
      <button
        onClick={handleCheck}
        className={[styles.checkboxButton, buttonClassName].join(' ')}
        style={{
          backgroundColor: isChecked ? checkedColor : 'transparent',
          borderColor: isChecked
            ? checkedColor
            : theme === 'Light'
            ? '#d9d9d9'
            : '#888888',
          width: buttonSizes[size || 'md'],
          height: buttonSizes[size || 'md'],
        }}
        disabled={disabled}
      >
        {isChecked && (checkedIcon || <Check />)}
      </button>
      {label && (
        <Typography type='paragraph' className={labelClassName}>
          {label}
        </Typography>
      )}
    </div>
  );
};

Checkbox.defaultProps = defaultProps;
