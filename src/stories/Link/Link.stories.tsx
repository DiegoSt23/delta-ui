import { StoryFn, Meta } from '@storybook/react';
import { RiExternalLinkLine } from 'react-icons/ri';
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
      minHeight: '100vh',
      padding: 20,
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
  children: <RiExternalLinkLine size={20} />,
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
