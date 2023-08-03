import { useState } from 'react';
import styles from './text-area.module.scss';

export interface TextAreaProps {
  onChange: (val: string) => void;
  value: string;
  name?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  numberOfRows?: number;
  className?: string;
}

const defaultProps: Partial<TextAreaProps> = {
  name: '',
  id: '',
  placeholder: 'Text Area',
  label: '',
  disabled: false,
  fullWidth: false,
  helperText: '',
  error: false,
  numberOfRows: 2,
  className: undefined,
};

export const TextArea = ({
  value,
  id,
  placeholder,
  name,
  label,
  onChange,
  disabled,
  fullWidth,
  helperText,
  error,
  numberOfRows,
  className,
}: TextAreaProps) => {
  const [val, setVal] = useState<string>(value);

  const onChangeLocal = (value: string) => {
    onChange(value);
    setVal(value);
  };

  return (
    <div
      className={styles.mainContainer}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {label && <p className={styles.label}>{label}</p>}
      <textarea
        className={[styles.textArea, className].join(' ')}
        value={val}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChangeLocal(e.target.value)}
        rows={numberOfRows}
        disabled={disabled}
        style={{ borderColor: error ? '#ff1b63' : '#80808044' }}
      />
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

TextArea.defaultProps = defaultProps;
