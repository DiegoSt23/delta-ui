/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Typography } from '../Typography';
import styles from './toggle.module.scss';

export interface ToggleProps {
  isActive: boolean;
  onChange: (isActive: boolean) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  buttonColor?: string;
  color?: string;
  mainContainerClassName?: string;
  labelClassName?: string;
  buttonClassName?: string;
  toggleClassName?: string;
}

const defaultProps: Partial<ToggleProps> = {
  label: '',
  size: 'md',
  disabled: false,
  buttonColor: '#303030',
  color: '#31dab5',
  mainContainerClassName: undefined,
  labelClassName: undefined,
  buttonClassName: undefined,
  toggleClassName: undefined,
};

const leftValues = {
  sm: 20,
  md: 25,
  lg: 30,
};

export const Toggle = ({
  isActive,
  onChange,
  label,
  size,
  disabled,
  buttonColor,
  color,
  mainContainerClassName,
  labelClassName,
  buttonClassName,
  toggleClassName,
}: ToggleProps) => {
  const [localIsActive, setLocalIsActive] = useState<boolean>(isActive);

  const handleChangeActive = () => setLocalIsActive(!localIsActive);

  useEffect(() => {
    onChange(localIsActive);
  }, [localIsActive]);

  return (
    <div className={[styles.mainContainer, mainContainerClassName].join(' ')}>
      {label && (
        <Typography type='paragraph' className={labelClassName}>
          {label}
        </Typography>
      )}
      <button
        className={[styles[size || 'md'], buttonClassName].join(' ')}
        style={{
          backgroundColor: localIsActive ? buttonColor : 'transparent',
          border: `solid 2px ${buttonColor}`,
        }}
        onClick={handleChangeActive}
        disabled={disabled}
      >
        <div
          className={[styles.toggle, toggleClassName].join(' ')}
          style={{
            left: isActive ? `${leftValues[size || 'md']}px` : '0px',
            backgroundColor: color,
          }}
        />
      </button>
    </div>
  );
};

Toggle.defaultProps = defaultProps;
