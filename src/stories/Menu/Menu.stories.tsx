import { StoryFn, Meta } from '@storybook/react';
import { AiOutlineCopy } from 'react-icons/ai';
import { PiScissors } from 'react-icons/pi';
import { VscAdd } from 'react-icons/vsc';
import { RiMenu4Fill } from 'react-icons/ri';
import { Menu, MenuProps } from '../../components';

export default {
  title: 'DeltaUI/Menu',
  component: Menu,
  argTypes: {},
} as Meta<typeof Menu>;

const Template: StoryFn<MenuProps> = (args) => (
  <div
    style={{
      minWidth: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: 20,
    }}
  >
    <Menu {...args} />
  </div>
);

export const Left = Template.bind({});
export const Right = Template.bind({});
export const WithSections = Template.bind({});
export const WithIcons = Template.bind({});
export const WithDescriptions = Template.bind({});
export const CustomMenuIcon = Template.bind({});

const items = [
  {
    title: 'Cut',
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Copy',
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Add to playlist',
    onClick: () => console.log('Option 1 triggered'),
  },
];

const itemsSections = [
  {
    title: 'Cut',
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Copy',
    underline: true,
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Add to playlist',
    onClick: () => console.log('Option 1 triggered'),
  },
];

const itemsIcons = [
  {
    title: 'Cut',
    icon: <PiScissors />,
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Copy',
    underline: true,
    icon: <AiOutlineCopy />,
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Add to playlist',
    icon: <VscAdd />,
    onClick: () => console.log('Option 1 triggered'),
  },
];

const itemsDescriptions = [
  {
    title: 'Cut',
    icon: <PiScissors />,
    description:
      'Description example, you can set any description that you want',
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Copy',
    underline: true,
    icon: <AiOutlineCopy />,
    description:
      'Description example, you can set any description that you want',
    onClick: () => console.log('Option 1 triggered'),
  },
  {
    title: 'Add to playlist',
    icon: <VscAdd />,
    description:
      'Description example, you can set any description that you want',
    onClick: () => console.log('Option 1 triggered'),
  },
];

Left.args = {
  items,
  position: 'left',
  width: 125,
};

Right.args = {
  items,
  width: 125,
};

WithSections.args = {
  items: itemsSections,
  width: 125,
};

WithIcons.args = {
  items: itemsIcons,
  width: 150,
};

WithDescriptions.args = {
  items: itemsDescriptions,
};

CustomMenuIcon.args = {
  menuIcon: <RiMenu4Fill color='gray' size={25} />,
  items,
  width: 125,
};
