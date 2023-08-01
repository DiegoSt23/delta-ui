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

Default.args = {
  children: 'test',
  href: 'https://github.com/DiegoSt23/delta-ui',
};

Underline.args = {
  children: 'test',
  href: 'https://github.com/DiegoSt23/delta-ui',
  textDecoration: 'underline',
};

Icon.args = {
  children: <AiFillAndroid />,
  href: 'https://github.com/DiegoSt23/delta-ui',
  textDecoration: 'underline',
};
