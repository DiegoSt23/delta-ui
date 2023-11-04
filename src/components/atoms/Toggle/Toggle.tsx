/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useTheme } from '../../../context';
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
  size: 'sm',
  disabled: false,
  buttonColor: undefined,
  color: undefined,
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
  const { theme } = useTheme();
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
          backgroundColor: localIsActive
            ? buttonColor || (theme === 'Dark' ? '#303030' : '#ebebeb')
            : 'transparent',
          border: `solid 2px ${
            buttonColor || (theme === 'Dark' ? '#303030' : '#ebebeb')
          }`,
        }}
        onClick={handleChangeActive}
        disabled={disabled}
      >
        <div
          className={[styles.toggle, toggleClassName].join(' ')}
          style={{
            left: isActive ? `${leftValues[size || 'md']}px` : '0px',
            backgroundColor:
              color || (theme === 'Dark' ? '#31dab5' : '#7191f8'),
          }}
        />
      </button>
    </div>
  );
};

Toggle.defaultProps = defaultProps;
