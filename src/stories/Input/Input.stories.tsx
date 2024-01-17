import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input, InputProps } from '../../components';
import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'DeltaUI/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => {
  const [val, setVal] = useState<string>('');

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: 20,
      }}
    >
      <Input {...args} value={val} onChange={(value) => setVal(value)} />
    </div>
  );
};

export const Text = Template.bind({});
export const Password = Template.bind({});
export const Label = Template.bind({});
export const HelperText = Template.bind({});
export const WithButton = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});
export const FullWidth = Template.bind({});

Text.args = {
  value: '',
  onChange: (text) => console.log(text),
};

Password.args = {
  value: '',
  onChange: (text) => console.log(text),
  type: 'password',
  placeholder: 'Password',
};

Label.args = {
  value: '',
  label: 'Label',
  onChange: (text) => console.log(text),
};

HelperText.args = {
  value: '',
  label: 'Label',
  helperText: 'Helper text',
  onChange: (text) => console.log(text),
};

Error.args = {
  value: '',
  onChange: (text) => console.log(text),
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};

WithButton.args = {
  value: '',
  label: 'Label',
  helperText: 'Helper text',
  onChange: (text) => console.log(text),
  buttonContent: <AiOutlineClose />,
};

FullWidth.args = {
  fullWidth: true,
  value: '',
  onChange: (text) => console.log(text),
  label: 'Label',
  helperText: 'Helper text',
};

Disabled.args = {
  value: '',
  onChange: (text) => console.log(text),
  disabled: true,
  label: 'Label',
  helperText: 'Helper text',
}
