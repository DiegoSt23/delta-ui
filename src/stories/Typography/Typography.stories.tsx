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
      height: '95vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      padding: 60,
    }}
  >
    <div>
      <div style={{ marginBottom: 20 }}>
        <Typography {...args} type='heading1'>
          h1. Lorem Ipsum
        </Typography>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography {...args} type='heading2'>
          h3. Lorem Ipsum
        </Typography>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography {...args} type='heading3'>
          h3. Lorem Ipsum
        </Typography>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography {...args} type='subtitle'>
          subtitle. Lorem Ipsum
        </Typography>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography {...args} type='paragraph'>
          p. Lorem Ipsum
        </Typography>
      </div>
      <Typography {...args} type='paragraph2'>
        p. Lorem Ipsum
      </Typography>
    </div>
  </div>
);

export const Default = Template.bind({});
