import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../components';
import { ImSearch } from 'react-icons/im';
import { AiFillApple } from 'react-icons/ai';

export default {
  title: 'DeltaUI/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => {
  const { children } = args;

  return (
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
      <Button {...args}>{children}</Button>
    </div>
  );
};

export const Default = Template.bind({});
export const TextAndIcon = Template.bind({});
export const Icon = Template.bind({});
export const FullWidth = Template.bind({});
export const Text = Template.bind({});
export const Filled = Template.bind({});
export const Small = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  children: 'Click',
};

Text.args = {
  children: 'Click',
  variant: 'text',
};

Filled.args = {
  children: 'Click',
  variant: 'filled',
};

Small.args = {
  children: 'Click',
  small: true,
};

FullWidth.args = {
  children: 'Click',
  fullWidth: true,
};

TextAndIcon.args = {
  children: 'Login with Apple',
  icon: <AiFillApple size={20} />,
};

Icon.args = {
  children: <ImSearch size={20} />,
};

Disabled.args = {
  children: 'Click',
  disabled: true,
};