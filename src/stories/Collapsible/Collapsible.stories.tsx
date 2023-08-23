import { StoryFn, Meta } from '@storybook/react';
import { Collapsible, CollapsibleProps, Typography } from '../../components';

export default {
  title: 'DeltaUI/Collapsible',
  component: Collapsible,
  argTypes: {},
} as Meta<typeof Collapsible>;

const Template: StoryFn<CollapsibleProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#000000',
      padding: 20,
      gap: 5,
    }}
  >
    <Collapsible
      {...args}
      content={
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
          earum illo id delectus accusantium quas sapiente provident est et
          dolore, similique dicta eligendi tempore laudantium placeat tempora
          unde molestias!
        </Typography>
      }
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Collapsible Title',
};
