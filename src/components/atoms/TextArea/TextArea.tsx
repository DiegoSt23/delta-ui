import { useTheme } from '../../../context';
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
  onBlur?: () => void;
  onFocus?: () => void;
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
  onBlur: undefined,
  onFocus: undefined,
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
  onBlur,
  onFocus,
  className,
}: TextAreaProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={styles.mainContainer}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {label && <p className={styles.label}>{label}</p>}
      <textarea
        className={[
          styles[`textArea${theme}`],
          error && styles.errorBorder,
          className,
        ].join(' ')}
        value={value}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        rows={numberOfRows}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
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
