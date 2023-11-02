/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { useTheme } from '../../../context';
import { Plus } from '../../../assets/icons';
import { Typography } from '../../atoms';
import styles from './collapsible.module.scss';

export interface CollapsibleProps {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  mainContainerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const defaultProps: Partial<CollapsibleProps> = {
  defaultOpen: false,
  onPress: undefined,
  backgroundColor: undefined,
  mainContainerClassName: undefined,
  headerClassName: undefined,
  titleClassName: undefined,
  contentClassName: undefined,
};

export const Collapsible = ({
  title,
  content,
  defaultOpen,
  onPress,
  backgroundColor,
  mainContainerClassName,
  headerClassName,
  titleClassName,
  contentClassName,
}: CollapsibleProps) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const handleOpen = () => {
    if (onPress) onPress();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(defaultOpen || false);
  }, [defaultOpen]);

  return (
    <div
      className={[
        styles[`collapsibleMainContainer${theme}`],
        mainContainerClassName,
      ].join(' ')}
      style={{ backgroundColor }}
    >
      <button
        className={[styles.headerButton, headerClassName].join(' ')}
        onClick={handleOpen}
      >
        <Typography type='subtitle' className={titleClassName}>
          {title}
        </Typography>
        <div
          className={styles.openButton}
          style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
        >
          <Plus width={25} height={25} className={styles.plusIcon} />
        </div>
      </button>
      <div
        ref={(element) => setScrollHeight(element?.scrollHeight || 0)}
        className={styles.collapsible}
        style={{ height: isOpen ? scrollHeight : 0 }}
      >
        <div className={[styles.contentContainer, contentClassName].join(' ')}>
          {content}
        </div>
      </div>
    </div>
  );
};

Collapsible.defaultProps = defaultProps;
