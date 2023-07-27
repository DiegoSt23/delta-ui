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
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      padding: 60,
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