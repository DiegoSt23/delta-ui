import { StoryFn, Meta } from '@storybook/react';
import { IoAlertCircleSharp } from 'react-icons/io5';
import { Avatar, Badge, BadgeProps } from '../../components';

export default {
  title: 'DeltaUI/Badge',
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      padding: 20,
    }}
  >
    <Badge {...args} />
  </div>
);

export const Dot = Template.bind({});
export const Count = Template.bind({});
export const CountBigNumber = Template.bind({});
export const BottomRight = Template.bind({});
export const TopLeft = Template.bind({});
export const BottomLeft = Template.bind({});
export const CustomColor = Template.bind({});
export const CustomIndicator = Template.bind({});

Dot.args = {
  children: <Avatar name='Diego Alvarez' size="md" />,
};

Count.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  count: 2,
  dot: false,
};

CountBigNumber.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  count: 287878,
  dot: false,
};

BottomRight.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  indicatorPosition: 'bottomRight',
};

TopLeft.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  indicatorPosition: 'topLeft',
};

BottomLeft.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  indicatorPosition: 'bottomLeft',
};

CustomColor.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  indicatorColor: '#31dab5',
};

CustomIndicator.args = {
  children: <Avatar name='Diego Alvarez' size="sm" />,
  customIndicator: <IoAlertCircleSharp size={15} color='#ff6404' />,
};