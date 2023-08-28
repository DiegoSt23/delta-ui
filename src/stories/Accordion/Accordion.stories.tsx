import { StoryFn, Meta } from '@storybook/react';
import { Accordion, AccordionProps, Typography } from '../../components';

export default {
  title: 'DeltaUI/Accordion',
  component: Accordion,
  argTypes: {},
} as Meta<typeof Accordion>;

const Template: StoryFn<AccordionProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#000000',
      padding: 20,
      gap: 30,
    }}
  >
    <Accordion {...args} />
  </div>
);

const items = [
  {
    title: 'Accordion Collapsible one',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
  {
    title: 'Accordion Collapsible two',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
  {
    title: 'Accordion Collapsible three',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
];

const customColorItems = [
  {
    title: 'Accordion Collapsible one',
    backgroundColor: '#8120ff2b',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
  {
    title: 'Accordion Collapsible two',
    backgroundColor: '#20c0ff2b',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
  {
    title: 'Accordion Collapsible three',
    backgroundColor: '#fffb202b',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
        earum illo id delectus accusantium quas sapiente provident est et
        dolore, similique dicta eligendi tempore laudantium placeat tempora unde
        molestias!
      </Typography>
    ),
  },
];

export const Default = Template.bind({});
export const OneAtATime = Template.bind({});
export const CustomColors = Template.bind({});

Default.args = {
  items,
};

OneAtATime.args = {
  items,
  singleOpen: true,
};

CustomColors.args = {
  items: customColorItems,
};
