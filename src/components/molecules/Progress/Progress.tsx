import { useEffect, useState } from 'react';
import { Tooltip } from '../../atoms';
import styles from './progress.module.scss';

export interface ProgressProps {
  total: number;
  progress: number;
  thickness?: 'light' | 'normal' | 'bold';
  progressColor?: string;
  displayTooltip?: boolean;
  containerClassName?: string;
  progressBarClassName?: string;
}

const defaultProps: Partial<ProgressProps> = {
  thickness: 'normal',
  progressColor: '#d9d9d9',
  displayTooltip: false,
  containerClassName: undefined,
  progressBarClassName: undefined,
};

export const Progress = ({
  total,
  progress,
  thickness,
  progressColor,
  displayTooltip,
  containerClassName,
  progressBarClassName,
}: ProgressProps) => {
  const [percent, setPercent] = useState<number>(0);

  const handleCalculatePercent = (partialValue: number, totalValue: number) => {
    const value = (100 * partialValue) / totalValue;

    if (value >= 100) {
      setPercent(100);
      return;
    }

    setPercent(value);
  };

  useEffect(() => {
    handleCalculatePercent(progress, total);
  }, [total, progress]);

  return (
    <div
      className={[styles[thickness || 'normal'], containerClassName].join(' ')}
    >
      {displayTooltip ? (
        <Tooltip tooltipContent={`${percent.toFixed(1)}%`}>
          <div
            className={[styles.progressBar, progressBarClassName].join(' ')}
            style={{
              width: `${percent}%`,
              backgroundColor: progressColor,
            }}
          />
        </Tooltip>
      ) : (
        <div
          className={[styles.progressBar, progressBarClassName].join(' ')}
          style={{
            width: `${percent}%`,
            backgroundColor: progressColor,
          }}
        />
      )}
    </div>
  );
};

Progress.defaultProps = defaultProps;
