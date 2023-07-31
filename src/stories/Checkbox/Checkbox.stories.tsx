import { StoryFn, Meta } from '@storybook/react';
import { BsCheck2Square } from 'react-icons/bs';
import { Checkbox, CheckboxProps } from '../../components';

export default {
  title: 'DeltaUI/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => (
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
    <Checkbox {...args} />
  </div>
);

export const Small = Template.bind({});
export const Mid = Template.bind({});
export const Large = Template.bind({});
export const WithLabel = Template.bind({});
export const CustomCheckedIcon = Template.bind({});
export const CustomCheckedColor = Template.bind({});
export const Disabled = Template.bind({});

Small.args = {
  onChange: (val) => console.log(val),
  size: 'sm',
};

Mid.args = {
  onChange: (val) => console.log(val),
};

Large.args = {
  onChange: (val) => console.log(val),
  size: 'lg',
};

WithLabel.args = {
  onChange: (val) => console.log(val),
  label: 'Custom Label'
};

CustomCheckedIcon.args = {
  onChange: (val) => console.log(val),
  checkedIcon: <BsCheck2Square />,
};

CustomCheckedColor.args = {
  onChange: (val) => console.log(val),
  checkedColor: '#ff3f4f',
};

Disabled.args = {
  isDefaultChecked: true,
  onChange: (val) => console.log(val),
  disabled: true,
};
