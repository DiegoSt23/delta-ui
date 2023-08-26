import { useState, ReactNode } from 'react';
import { Typography } from '../../atoms';
import styles from './tabs.module.scss';

interface TabProps {
  title: string | ReactNode;
  key: string | number;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface TabsProps {
  items: TabProps[];
  defaultActiveTabKey?: string | number;
  tabPosition: 'default' | 'center' | 'right' | 'fixed';
  mainContainerClassName?: string;
  tabsContainerClassName?: string;
  tabContainerClassName?: string;
  activeTabContainerClassName?: string;
  contentContainerClassName?: string;
}

const defaultProps: Partial<TabsProps> = {
  defaultActiveTabKey: undefined,
  tabPosition: 'default',
  mainContainerClassName: undefined,
  tabsContainerClassName: undefined,
  tabContainerClassName: undefined,
  activeTabContainerClassName: undefined,
  contentContainerClassName: undefined,
};

export const Tabs = ({
  items,
  defaultActiveTabKey,
  tabPosition,
  mainContainerClassName,
  tabsContainerClassName,
  tabContainerClassName,
  activeTabContainerClassName,
  contentContainerClassName,
}: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string | number>(
    defaultActiveTabKey || items[0].key
  );

  const handleSetActiveKey = (key: string | number) => {
    setActiveKey(key);
  };

  return (
    <div
      className={[styles.tabsMainContainer, mainContainerClassName].join(' ')}
    >
      <div
        className={[styles.tabsContainer, tabsContainerClassName].join(' ')}
        style={{
          width: ['default', 'center', 'right'].includes(tabPosition)
            ? 'fit-content'
            : '100%',
          alignSelf:
            tabPosition === 'center'
              ? 'center'
              : tabPosition === 'right'
              ? 'flex-end'
              : 'flex-start',
        }}
      >
        {items.map((item) => (
          <button
            className={
              item.key === activeKey
                ? [styles.activeTab, activeTabContainerClassName].join(' ')
                : [styles.tab, tabContainerClassName].join(' ')
            }
            onClick={() => {
              handleSetActiveKey(item.key);

              if (item.onClick) {
                item.onClick();
              }
            }}
            disabled={item?.disabled || false}
            style={{
              width: ['default', 'center'].includes(tabPosition)
                ? 'auto'
                : `${100 / items.length}%`,
            }}
          >
            {typeof item.title === 'string' ? (
              <Typography className={styles.title} type='paragraph2'>
                {item.title}
              </Typography>
            ) : (
              item.title
            )}
          </button>
        ))}
      </div>
      <div className={[styles.contentContainer, contentContainerClassName].join(' ')}>
        {items.find((item) => item.key === activeKey)?.children || null}
      </div>
    </div>
  );
};

Tabs.defaultProps = defaultProps;
