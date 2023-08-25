import { useState } from 'react';
import { Collapsible, CollapsibleProps } from '../../molecules';
import styles from './accordion.module.scss';

export interface AccordionProps {
  items: CollapsibleProps[];
  singleOpen?: boolean;
}

const defaultProps: Partial<AccordionProps> = {
  singleOpen: false,
};

export const Accordion = ({ items, singleOpen }: AccordionProps) => {
  const [currentOpen, setCurrentOpen] = useState<number | undefined>(undefined);

  const handleTest = (index: number) => {
    if (singleOpen) {
      setCurrentOpen(index);
    }
  };

  return (
    <div className={styles.accordionMainContainer}>
      {items?.map((item, index) => (
        <Collapsible
          key={index}
          {...item}
          onPress={() => handleTest(index)}
          defaultOpen={index === currentOpen}
        />
      ))}
    </div>
  );
};

Accordion.defaultProps = defaultProps;
