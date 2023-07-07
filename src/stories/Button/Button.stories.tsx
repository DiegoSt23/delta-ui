import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../components';
import { ImSearch } from 'react-icons/im';
import { AiFillApple } from 'react-icons/ai';

export default {
  title: 'SierraUI/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => {
  const { children } = args;

  return (
    <div
      style={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      <Button {...args}>{children}</Button>
    </div>
  )
};

export const Text = Template.bind({});
export const TextAndIcon = Template.bind({});
export const Icon = Template.bind({});

Text.args = {
  children: 'Click',
};

TextAndIcon.args = {
  children: 'Login with Apple',
  icon: <AiFillApple size={20} />,
};

Icon.args = {
  children: <ImSearch size={20} />,
};
