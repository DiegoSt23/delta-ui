import { StoryFn, Meta } from '@storybook/react';
import { Tooltip, TooltipProps, Typography } from '../../components';
import { BsInfoCircle, BsFillBrightnessHighFill } from 'react-icons/bs';

export default {
  title: 'DeltaUI/Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta<typeof Tooltip>;

const Template: StoryFn<TooltipProps> = (args) => (
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
    <Tooltip {...args} />
  </div>
);

export const Top = Template.bind({});
export const Bottom = Template.bind({});
export const Left = Template.bind({});
export const Right = Template.bind({});
export const CustomElement = Template.bind({});

Top.args = {
  children: <BsInfoCircle color='gray' size={20} />,
  tooltipContent: 'Lorem Ipsum',
};

Bottom.args = {
  children: <BsInfoCircle color='gray' size={20} />,
  tooltipContent: 'Lorem Ipsum',
  position: 'bottom',
};

Left.args = {
  children: <BsInfoCircle color='gray' size={20} />,
  tooltipContent: 'Lorem Ipsum',
  position: 'left',
};

Right.args = {
  children: <BsInfoCircle color='gray' size={20} />,
  tooltipContent: 'Lorem Ipsum',
  position: 'right',
};

CustomElement.args = {
  children: <BsInfoCircle color='gray' size={20} />,
  tooltipContent: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <BsFillBrightnessHighFill color='gray' />
      <Typography type='paragraph'>
        Icon and text
      </Typography>
    </div>
  ),
};
