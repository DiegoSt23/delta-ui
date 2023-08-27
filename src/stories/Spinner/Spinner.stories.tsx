import { StoryFn, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '../../components';

export default {
  title: 'DeltaUI/Spinner',
  component: Spinner,
  argTypes: {},
} as Meta<typeof Spinner>;

const Template: StoryFn<SpinnerProps> = (args) => (
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
    <Spinner {...args} />
  </div>
);

export const SpinSm = Template.bind({});
export const SpinMd = Template.bind({});
export const SpinLg = Template.bind({});
export const SpinTwoSm = Template.bind({});
export const SpinTwoMd = Template.bind({});
export const SpinTwoLg = Template.bind({});
export const DoubleSpinSm = Template.bind({});
export const DoubleSpinMd = Template.bind({});
export const DoubleSpinLg = Template.bind({});
export const PulseSm = Template.bind({});
export const PulseMd = Template.bind({});
export const PulseLg = Template.bind({});
export const PulseTwoSm = Template.bind({});
export const PulseTwoMd = Template.bind({});
export const PulseTwoLg = Template.bind({});
export const DotsSm = Template.bind({});
export const DotsMd = Template.bind({});
export const DotsLg = Template.bind({});

SpinSm.args = {
  size: 'sm',
};

SpinMd.args = {
  size: 'md',
};

SpinLg.args = {
  size: 'lg',
};

SpinTwoSm.args = {
  variant: 'spin2',
  size: 'sm',
};

SpinTwoMd.args = {
  variant: 'spin2',
  size: 'md',
};

SpinTwoLg.args = {
  variant: 'spin2',
  size: 'lg',
};

DoubleSpinSm.args = {
  variant: 'doubleSpin',
  size: 'sm',
};

DoubleSpinMd.args = {
  variant: 'doubleSpin',
  size: 'md',
};

DoubleSpinLg.args = {
  variant: 'doubleSpin',
  size: 'lg',
};

PulseSm.args = {
  variant: 'pulse',
  size: 'sm',
};

PulseMd.args = {
  variant: 'pulse',
  size: 'md',
};

PulseLg.args = {
  variant: 'pulse',
  size: 'lg',
};

PulseTwoSm.args = {
  variant: 'pulse2',
  size: 'sm',
};

PulseTwoMd.args = {
  variant: 'pulse2',
  size: 'md',
};

PulseTwoLg.args = {
  variant: 'pulse2',
  size: 'lg',
};

DotsSm.args = {
  variant: 'dots',
  size: 'sm',
};

DotsMd.args = {
  variant: 'dots',
  size: 'md',
};

DotsLg.args = {
  variant: 'dots',
  size: 'lg',
};
