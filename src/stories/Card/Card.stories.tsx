import { StoryFn, Meta } from '@storybook/react';
import { Card, CardProps, Button, Typography, Divider } from '../../components';

export default {
  title: 'DeltaUI/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => (
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
    <div style={{ width: '50%' }}>
      <Card {...args}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
          earum recusandae eligendi assumenda vel eius dignissimos harum eum
          consequatur sed velit, iure repellat quos doloribus quod unde? Magnam,
          in.
        </Typography>
        <Divider />
        <div style={{ marginBottom: 10 }}>
          <Typography type='subtitle'>Subtitle</Typography>
        </div>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
          earum recusandae eligendi assumenda vel eius dignissimos harum eum
          consequatur sed velit, iure repellat quos doloribus quod unde? Magnam,
          in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          facilis earum recusandae eligendi assumenda vel eius dignissimos harum
          eum consequatur sed velit, iure repellat quos doloribus quod unde?
          Magnam, in.
        </Typography>
      </Card>
    </div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  headerTitle: 'Card Title',
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>Accept</Button>
    </div>
  ),
};
