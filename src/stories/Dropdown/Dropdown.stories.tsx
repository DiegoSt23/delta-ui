import { StoryFn, Meta } from '@storybook/react';
import { Dropdown, DropdownProps } from '../../components';

export default {
  title: 'DeltaUI/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => (
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
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      name: 'Option 1',
      value: 1,
    },
    {
      name: 'Option 2',
      value: 2,
    },
    {
      name: 'Option 3',
      value: 3,
    },
    {
      name: 'Option 4',
      value: 4,
    },
    {
      name: 'Option 5',
      value: 5,
    },
  ],
  onChange: (val) => console.log(val),
};
