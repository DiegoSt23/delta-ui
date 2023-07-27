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
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      padding: 60,
    }}
  >
    <Menu {...args} />
  </div>
);

export const Center = Template.bind({});
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

Center.args = {
  items,
};

Left.args = {
  items,
  position: 'left',
};

Right.args = {
  items,
  position: 'right',
};

WithSections.args = {
  items: itemsSections,
};

WithIcons.args = {
  items: itemsIcons,
};

WithDescriptions.args = {
  items: itemsDescriptions,
};

CustomMenuIcon.args = {
  menuIcon: <RiMenu4Fill color='gray' size={25} />,
  items,
};
