import { Collapsible, CollapsibleProps } from '../../molecules';
import styles from './accordion.module.scss';

export interface AccordionProps {
  items: CollapsibleProps[];
}

export const Accordion = ({ items }: AccordionProps) => (
  <div className={styles.accordionMainContainer}>
    {items?.map((item, index) => (
      <Collapsible key={index} {...item} />
    ))}
  </div>
);
