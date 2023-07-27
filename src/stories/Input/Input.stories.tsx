import { StoryFn, Meta } from '@storybook/react';
import { Input, InputProps } from '../../components';
import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'DeltaUI/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => (
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
    <Input {...args} />
  </div>
);

export const Text = Template.bind({});
export const Password = Template.bind({});
export const WithButton = Template.bind({});
export const Error = Template.bind({});
export const FullWidth = Template.bind({});
export const Disabled = Template.bind({});

Text.args = {
  value: '',
  onChange: (text) => console.log(text),
};

Password.args = {
  value: '',
  onChange: (text) => console.log(text),
  type: 'password',
  label: 'Password',
  placeholder: 'Password',
};

Error.args = {
  value: '',
  onChange: (text) => console.log(text),
  helperText: 'Required',
  error: true,
};

WithButton.args = {
  value: '',
  label: 'Term',
  placeholder: 'Start typing',
  onChange: (text) => console.log(text),
  buttonContent: <AiOutlineClose />,
};

FullWidth.args = {
  fullWidth: true,
  value: '',
  onChange: (text) => console.log(text),
};

Disabled.args = {
  value: '',
  onChange: (text) => console.log(text),
  disabled: true,
};
