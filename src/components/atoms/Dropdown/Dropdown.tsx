/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { ArrowDown } from '../../../assets/icons';
import styles from './dropdown.module.scss';

type ItemProps = {
  name: string;
  value: string | number;
}

export interface DropdownProps {
  items: ItemProps[];
  onChange: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  mainContainerClassName?: string;
  optionsContainerClassName?: string;
  optionClassName?: string;
}

const defaultProps: Partial<DropdownProps> = {
  placeholder: 'Select',
  label: '',
  error: false,
  helperText: '',
  mainContainerClassName: undefined,
  optionsContainerClassName: undefined,
  optionClassName: undefined,
};

export const Dropdown = ({
  items,
  onChange,
  placeholder,
  label,
  error,
  helperText,
  mainContainerClassName,
  optionsContainerClassName,
  optionClassName,
}: DropdownProps) => {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState<
    string | number | undefined
  >(undefined);
  const [selectedOptionText, setSelectedOptionText] = useState<
    string | undefined
  >(undefined);
  const [opacity, setOpacity] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(-20);

  const handleDisplayDropdown = () => {
    if (displayDropdown) {
      setOpacity(0);
      setTranslateY(-20);
      setTimeout(() => {
        setDisplayDropdown(false);
      }, 300);
    } else {
      setDisplayDropdown(true);
      setTimeout(() => {
        setOpacity(1);
        setTranslateY(0);
      }, 100);
    }
  };

  useEffect(() => {
    if (selectedOptionValue) {
      onChange(selectedOptionValue);
      const selectedItem: ItemProps | undefined = items.find(
        (item) => item.value === selectedOptionValue
      );
      setSelectedOptionText(selectedItem?.name || undefined);
    }
  }, [selectedOptionValue]);

  return (
    <div className={styles.mainContainer}>
      {label && <p className={styles.label}>{label}</p>}
      <button
        className={[styles.button, mainContainerClassName].join(' ')}
        style={{ borderColor: error ? '#ff1b63' : '#80808044' }}
        onClick={handleDisplayDropdown}
      >
        {selectedOptionText || placeholder}
        <ArrowDown
          width={15}
          height={15}
          style={{ transform: `rotate(${displayDropdown ? 180 : 0}deg)` }}
          className={styles.arrow}
        />
      </button>
      {helperText && (
        <p
          className={styles.helperText}
          style={{ color: error ? '#ff1b63' : '#888888' }}
        >
          {helperText}
        </p>
      )}
      {displayDropdown && (
        <select
          multiple
          size={items?.length}
          onChange={(e) => {
            setSelectedOptionValue(+e.target.value);
            handleDisplayDropdown();
          }}
          className={[styles.optionsContainer, optionsContainerClassName].join(
            ' '
          )}
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          {items?.map(({ name, value }) => (
            <option
              key={value}
              value={value}
              className={[styles.option, optionClassName].join(' ')}
            >
              {name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

Dropdown.defaultProps = defaultProps;
