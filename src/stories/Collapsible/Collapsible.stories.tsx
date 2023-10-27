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
      minHeight: '100vh',
      padding: 20,
      gap: 5,
    }}
  >
    <Collapsible
      {...args}
      content={
        <>
          <Typography type='subtitle'>
            This receives ReactNode, you can place any content that you want.
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
            earum illo id delectus accusantium quas sapiente provident est et
            dolore, similique dicta eligendi tempore laudantium placeat tempora
            unde molestias!
          </Typography>
        </>
      }
    />
  </div>
);

export const Default = Template.bind({});
export const CustomColor = Template.bind({});

Default.args = {
  title: 'Collapsible Title',
};

CustomColor.args = {
  title: 'Collapsible Title',
  backgroundColor: '#8120ff2b',
};
