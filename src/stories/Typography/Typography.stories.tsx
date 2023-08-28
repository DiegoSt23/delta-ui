import { StoryFn, Meta } from '@storybook/react';
import { Typography, TypographyProps } from '../../components';

export default {
  title: 'DeltaUI/Typography',
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

const Template: StoryFn<TypographyProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#000000',
      padding: 20,
      gap: 30,
    }}
  >
    <Typography {...args} type='heading1'>
      h1. Lorem Ipsum
    </Typography>
    <Typography {...args} type='heading2'>
      h2. Lorem Ipsum
    </Typography>
    <Typography {...args} type='heading3'>
      h3. Lorem Ipsum
    </Typography>
    <Typography {...args} type='heading4'>
      h4. Lorem Ipsum
    </Typography>
    <Typography {...args} type='subtitle'>
      subtitle. Lorem ipsum
    </Typography>
    <Typography {...args} type='paragraph'>
      paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit sit, eum in unde illum voluptatibus, odit officiis perspiciatis
      voluptates reprehenderit, culpa velit ipsa iusto? Inventore, voluptate.
      Nemo excepturi corrupti est!
    </Typography>
    <Typography {...args} type='paragraph2'>
      paragraph2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit sit, eum in unde illum voluptatibus, odit officiis perspiciatis
      voluptates reprehenderit, culpa velit ipsa iusto? Inventore, voluptate.
      Nemo excepturi corrupti est!
    </Typography>
    <Typography {...args} type='paragraph3'>
      paragraph3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit sit, eum in unde illum voluptatibus, odit officiis perspiciatis
      voluptates reprehenderit, culpa velit ipsa iusto? Inventore, voluptate.
      Nemo excepturi corrupti est!
    </Typography>
  </div>
);

export const Default = Template.bind({});
