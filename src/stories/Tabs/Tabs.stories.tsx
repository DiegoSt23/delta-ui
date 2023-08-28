import { StoryFn, Meta } from '@storybook/react';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { Tabs, TabsProps, Typography } from '../../components';

export default {
  title: 'DeltaUI/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: 20,
    }}
  >
    <Tabs {...args} />
  </div>
);

export const Default = Template.bind({});
export const SelectedByDefault = Template.bind({});
export const DisabledTab = Template.bind({});
export const Center = Template.bind({});
export const Right = Template.bind({});
export const Fixed = Template.bind({});
export const WithIcons = Template.bind({});
export const Overflow = Template.bind({});

const items = [
  {
    title: 'TAB 1',
    children: (
      <>
        <Typography type='subtitle'>Tab ONE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab1',
  },
  {
    title: 'TAB 2',
    children: (
      <>
        <Typography type='subtitle'>Tab TWO content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab2',
  },
  {
    title: 'TAB 3',
    children: (
      <>
        <Typography type='subtitle'>Tab THREE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab3',
  },
];

const itemsDisableTab = [
  {
    title: 'TAB 1',
    children: (
      <>
        <Typography type='subtitle'>Tab ONE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab1',
  },
  {
    title: 'TAB 2',
    children: (
      <>
        <Typography type='subtitle'>Tab TWO content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab2',
    disabled: true,
  },
  {
    title: 'TAB 3',
    children: (
      <>
        <Typography type='subtitle'>Tab THREE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab3',
  },
];

const itemsOverflow = [
  {
    title: 'Tabs with very long titles that would cause an overflow 1',
    children: (
      <>
        <Typography type='subtitle'>Tab ONE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab1',
  },
  {
    title: 'Tabs with very long titles that would cause an overflow 2',
    children: (
      <>
        <Typography type='subtitle'>Tab TWO content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab2',
  },
  {
    title: 'Tabs with very long titles that would cause an overflow 3',
    children: (
      <>
        <Typography type='subtitle'>Tab THREE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab3',
  },
  {
    title: 'Tabs with very long titles that would cause an overflow 4',
    children: (
      <>
        <Typography type='subtitle'>Tab FOUR content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab4',
  },
  {
    title: 'Tabs with very long titles that would cause an overflow 5',
    children: (
      <>
        <Typography type='subtitle'>Tab FIVE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab5',
  },
];

const iconItems = [
  {
    title: <AiFillAndroid size={20} color='#d9d9d9' />,
    children: (
      <>
        <Typography type='subtitle'>Tab ONE content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab1',
  },
  {
    title: <AiFillApple size={20} color='#d9d9d9' />,
    children: (
      <>
        <Typography type='subtitle'>Tab TWO content.</Typography>
        <br />
        <Typography type='subtitle'>
          This receives ReactNode, you can place any content that you want.
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      </>
    ),
    key: 'tab2',
  },
];

Default.args = {
  items,
};

SelectedByDefault.args = {
  items,
  defaultActiveTabKey: 'tab3',
};

DisabledTab.args = {
  items: itemsDisableTab,
};

Center.args = {
  items,
  tabPosition: 'center',
};

Right.args = {
  items,
  tabPosition: 'right',
};

Fixed.args = {
  items,
  tabPosition: 'fixed',
};

WithIcons.args = {
  items: iconItems,
};

Overflow.args = {
  items: itemsOverflow,
};
