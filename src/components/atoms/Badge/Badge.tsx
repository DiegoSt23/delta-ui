import { ReactNode } from 'react';
import styles from './badge.module.scss';

export interface BadgeProps {
  children: ReactNode;
  dot?: boolean;
  count?: number;
  indicatorColor?: string;
  indicatorPosition?: 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft';
  customIndicator?: ReactNode;
  indicatorClassName?: string;
  countClassName?: string;
}

const defaultProps: Partial<BadgeProps> = {
  dot: true,
  count: undefined,
  indicatorColor: undefined,
  indicatorPosition: 'topRight',
  customIndicator: undefined,
  indicatorClassName: undefined,
  countClassName: undefined,
};

export const Badge = ({
  children,
  dot,
  count,
  indicatorColor,
  indicatorPosition,
  customIndicator,
  indicatorClassName,
  countClassName,
}: BadgeProps) => (
  <div className={styles.badgeMainContainer}>
    {children}
    <div className={styles[indicatorPosition || 'topRight']}>
      {customIndicator ||
        (dot ? (
          <div
            className={[styles.indicator, indicatorClassName].join(' ')}
            style={{ backgroundColor: indicatorColor }}
          />
        ) : (
          <div
            className={[styles.indicatorCount, indicatorClassName].join(' ')}
            style={{ backgroundColor: indicatorColor }}
          >
            {count && (
              <p className={[styles.count, countClassName].join(' ')}>
                {count > 999 ? '999+' : count}
              </p>
            )}
          </div>
        ))}
    </div>
  </div>
);

Badge.defaultProps = defaultProps;
