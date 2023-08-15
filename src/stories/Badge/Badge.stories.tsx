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
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      padding: 60,
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
  children: <Avatar name='Diego Alvarez' />,
};

Count.args = {
  children: <Avatar name='Diego Alvarez' />,
  count: 2,
  dot: false,
};

CountBigNumber.args = {
  children: <Avatar name='Diego Alvarez' />,
  count: 287878,
  dot: false,
};

BottomRight.args = {
  children: <Avatar name='Diego Alvarez' />,
  indicatorPosition: 'bottomRight',
};

TopLeft.args = {
  children: <Avatar name='Diego Alvarez' />,
  indicatorPosition: 'topLeft',
};

BottomLeft.args = {
  children: <Avatar name='Diego Alvarez' />,
  indicatorPosition: 'bottomLeft',
};

CustomColor.args = {
  children: <Avatar name='Diego Alvarez' />,
  indicatorColor: '#31dab5',
};

CustomIndicator.args = {
  children: <Avatar name='Diego Alvarez' />,
  customIndicator: <IoAlertCircleSharp size={15} color='#ff6404' />,
};