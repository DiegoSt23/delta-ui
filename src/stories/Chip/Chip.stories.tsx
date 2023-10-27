import { StoryFn, Meta } from '@storybook/react';
import { Chip, ChipProps } from '../../components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default {
  title: 'DeltaUI/Chip',
  component: Chip,
  argTypes: {},
} as Meta<typeof Chip>;

const Template: StoryFn<ChipProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 10,
    }}
  >
    <Chip {...args} color='primary'>
      Lorem Ipsum
    </Chip>
    <Chip {...args} color='green'>
      Lorem Ipsum
    </Chip>
    <Chip {...args} color='blue'>
      Lorem Ipsum
    </Chip>
    <Chip {...args} color='pink'>
      Lorem Ipsum
    </Chip>
    <Chip {...args} color='yellow'>
      Lorem Ipsum
    </Chip>
    <Chip {...args} color='purple'>
      Lorem Ipsum
    </Chip>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  icon: <AiOutlineCheckCircle />,
};