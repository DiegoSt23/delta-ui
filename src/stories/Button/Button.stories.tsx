import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../components';
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai';

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
        minHeight: '100vh',
        padding: 20,
      }}
    >
      <Button {...args}>{children}</Button>
    </div>
  );
};

export const Hollow = Template.bind({});
export const IconPrefix = Template.bind({});
export const IconSuffix = Template.bind({});
export const Icon = Template.bind({});
export const FullWidth = Template.bind({});
export const Text = Template.bind({});
export const Filled = Template.bind({});
export const Small = Template.bind({});
export const Disabled = Template.bind({});

Hollow.args = {
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

IconPrefix.args = {
  children: 'Login with Apple',
  icon: <AiFillApple size={20} />,
};

IconSuffix.args = {
  children: 'Login with Apple',
  icon: <AiFillApple size={20} />,
  iconPosition: 'suffix',
};

Icon.args = {
  children: <AiOutlineSearch size={20} />,
};

Disabled.args = {
  children: 'Click',
  disabled: true,
};
