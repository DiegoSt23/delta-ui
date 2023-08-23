import { ReactNode, useState } from 'react';
import { Plus } from '../../../assets/icons';
import { Typography } from '../../atoms';
import styles from './collapsible.module.scss';

export interface CollapsibleProps {
  title: string;
  content: ReactNode;
  mainContainerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const defaultProps: Partial<CollapsibleProps> = {
  mainContainerClassName: undefined,
  headerClassName: undefined,
  titleClassName: undefined,
  contentClassName: undefined,
};

export const Collapsible = ({
  title,
  content,
  mainContainerClassName,
  headerClassName,
  titleClassName,
  contentClassName,
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={[styles.collapsibleMainContainer, mainContainerClassName].join(
        ' '
      )}
    >
      <button
        className={[styles.headerButton, headerClassName].join(' ')}
        onClick={handleOpen}
      >
        <Typography
          type='paragraph'
          className={[styles.title, titleClassName].join(' ')}
        >
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
