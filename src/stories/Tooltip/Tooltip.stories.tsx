import { StoryFn, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from '../../components';
import { BsInfoCircle } from 'react-icons/bs';
import { IoIosFlash } from 'react-icons/io';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }}
    >
      <IoIosFlash color='#e2c41a' size={25} />
      <p
        style={{
          color: '#d9d9d9',
          textAlign: 'center',
          fontFamily: 'Roboto',
          letterSpacing: 1,
          fontSize: 12,
          lineHeight: 1.5,
        }}
      >
        The tooltip can receive also ReactNode
      </p>
    </div>
  ),
};
