import { StoryFn, Meta } from '@storybook/react';
import { Progress, ProgressProps } from '../../components';

export default {
  title: 'DeltaUI/Progress',
  component: Progress,
  argTypes: {},
} as Meta<typeof Progress>;

const Template: StoryFn<ProgressProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}
  >
    <Progress {...args} />
  </div>
);

export const Light = Template.bind({});
export const Normal = Template.bind({});
export const Bold = Template.bind({});
export const Tooltip = Template.bind({});
export const CustomColor = Template.bind({});

Light.args = {
  total: 100,
  progress: 45,
  thickness: 'light',
  progressColor: '',
};

Normal.args = {
  total: 100,
  progress: 45,
  thickness: 'normal',
  progressColor: '',
};

Bold.args = {
  total: 100,
  progress: 45,
  thickness: 'bold',
  progressColor: '',
};

CustomColor.args = {
  total: 100,
  progress: 45,
  thickness: 'normal',
  progressColor: '#5650ff',
};

Tooltip.args = {
  total: 100,
  progress: 45,
  thickness: 'normal',
  progressColor: '',
  displayTooltip: true,
};
