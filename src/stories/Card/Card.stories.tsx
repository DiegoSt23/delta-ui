import { StoryFn, Meta } from '@storybook/react';
import { Card, CardProps, Button, Typography, Menu } from '../../components';
import { useWindowDimensions } from '../..';

export default {
  title: 'DeltaUI/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        padding: 20,
      }}
    >
      <div style={{ width: isMobile ? '100%' : '50%' }}>
        <Card {...args} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
export const WithHeader = Template.bind({});
export const WithHeaderElement = Template.bind({});
export const WithFooter = Template.bind({});
export const Complete = Template.bind({});

const content = (
  <>
    <div style={{ marginBottom: 10 }}>
      <Typography type='subtitle'>
        Generic content, you can place anything you want as children, could be
        buttons, text, inputs, images, tables, forms, etc.
      </Typography>
    </div>
    <br/>
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
      earum recusandae eligendi assumenda vel eius dignissimos harum eum
      consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
      earum recusandae eligendi assumenda vel eius dignissimos harum eum
      consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
      earum recusandae eligendi assumenda vel eius dignissimos harum eum
      consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis
      earum recusandae eligendi assumenda vel eius dignissimos harum eum
      consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in.
    </Typography>
  </>
);

Default.args = {
  children: content,
};

WithHeader.args = {
  children: content,
  headerTitle: 'Card Title',
};

WithHeaderElement.args = {
  children: content,
  headerTitle: 'Card Title',
  headerElement: (
    <Menu
      position="left"
      width={90}
      items={[
        {
          title: 'Option 1',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 2',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 3',
          onClick: () => console.log('Option 1 triggered'),
        },
      ]}
    />
  ),
};

WithFooter.args = {
  children: content,
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>
        Accept
      </Button>
    </div>
  ),
};

Complete.args = {
  children: content,
  headerTitle: 'Card Title',
  headerElement: (
    <Menu
      position='left'
      width={90}
      items={[
        {
          title: 'Option 1',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 2',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 3',
          onClick: () => console.log('Option 1 triggered'),
        },
      ]}
    />
  ),
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>
        Accept
      </Button>
    </div>
  ),
};
