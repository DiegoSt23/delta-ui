import { StoryFn, Meta } from '@storybook/react';
import { AiFillAndroid } from 'react-icons/ai';
import { Link, LinkProps } from '../../components';

export default {
  title: 'DeltaUI/Link',
  component: Link,
  argTypes: {},
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => (
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
    <Link {...args} />
  </div>
);

export const Default = Template.bind({});
export const Underline = Template.bind({});
export const Icon = Template.bind({});
export const TargetSelf = Template.bind({});
export const Download = Template.bind({});

Default.args = {
  children: 'link',
  href: 'https://github.com/DiegoSt23/delta-ui',
  target: '_blank',
};

Underline.args = {
  children: 'link',
  href: 'https://github.com/DiegoSt23/delta-ui',
  textDecoration: 'underline',
  target: '_blank',
};

Icon.args = {
  children: <AiFillAndroid />,
  href: 'https://github.com/DiegoSt23/delta-ui',
  textDecoration: 'underline',
  target: '_blank',
};

TargetSelf.args = {
  children: 'link',
  href: 'https://es.react.dev/',
};

Download.args = {
  children: 'download',
  href: '#',
  download: true,
};
