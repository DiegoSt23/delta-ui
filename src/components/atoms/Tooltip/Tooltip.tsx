import { ReactNode } from 'react';
import { useTheme } from '../../../context';
import { Typography } from '../Typography';
import styles from './tooltip.module.scss';

export interface TooltipProps {
  children: ReactNode;
  tooltipContent: string | ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number;
  className?: string;
}

const defaultProps: Partial<TooltipProps> = {
  position: 'top',
  maxWidth: 200,
  className: undefined,
};

export const Tooltip = ({
  children,
  tooltipContent,
  position,
  maxWidth,
  className,
}: TooltipProps) => {
  const theme = useTheme();

  return (
    <div className={styles.mainContainer}>
      {children}
      <div
        className={[styles[`${position}${theme}` || 'topDark'], className].join(' ')}
        style={{ maxWidth }}
      >
        {typeof tooltipContent === 'string' ? (
          <Typography type='paragraph2' className={styles.text}>
            {tooltipContent}
          </Typography>
        ) : (
          tooltipContent
        )}
      </div>
    </div>
  );
};

Tooltip.defaultProps = defaultProps;
