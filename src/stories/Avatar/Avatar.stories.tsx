import { StoryFn, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '../../components';

export default {
  title: 'DeltaUI/Avatar',
  component: Avatar,
  argTypes: {},
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      padding: 20,
    }}
  >
    <Avatar {...args} />
  </div>
);

export const Xs = Template.bind({});
export const Sm = Template.bind({});
export const Md = Template.bind({});
export const Lg = Template.bind({});
export const Xl = Template.bind({});
export const CustomColors = Template.bind({});
export const Image = Template.bind({});

Xs.args = {
  name: 'Diego Alvarez',
  size: 'xs',
};

Sm.args = {
  name: 'Diego Alvarez',
  size: 'sm',
};

Md.args = {
  name: 'Diego Alvarez',
  size: 'md',
};

Lg.args = {
  name: 'Diego Alvarez',
  size: 'lg',
};

Xl.args = {
  name: 'Diego Alvarez',
  size: 'xl',
};

CustomColors.args = {
  name: 'Diego Alvarez',
  backgroundColor: '#ff3f4f',
  textColor: '#fff',
};

Image.args = {
  name: 'Diego Alvarez',
  imgUrl:
    'https://www.tonica.la/__export/1570295073947/sites/debate/img/2019/10/05/deftones.jpg_423682103.jpg',
};
