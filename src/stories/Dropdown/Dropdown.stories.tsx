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
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: 20,
    }}
  >
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});
export const Label = Template.bind({});
export const HelperText = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});

const items = [
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
];

Default.args = {
  items,
  onChange: (val) => console.log(val),
};

Label.args = {
  items,
  label: 'Label',
  onChange: (val) => console.log(val),
};

HelperText.args = {
  items,
  label: 'Label',
  helperText: 'Helper text',
  onChange: (val) => console.log(val),
};

Error.args = {
  items,
  label: 'Label',
  helperText: 'Helper text',
  error: true,
  onChange: (val) => console.log(val),
};

Disabled.args = {
  items,
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
  onChange: (val) => console.log(val),
};
