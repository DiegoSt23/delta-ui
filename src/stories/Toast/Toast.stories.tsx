import { useRef } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { GiButterflyWarning } from 'react-icons/gi';
import { Toast, ToastProps, ToastRefProps, Button } from '../../components';
export default {
  title: 'DeltaUI/Toast',
  component: Toast,
  argTypes: {},
} as Meta<typeof Toast>;
const Template: StoryFn<ToastProps> = (args) => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };

  return (
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
      <Toast
        {...args}
        ref={ref}
      />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>
  );
};
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const WithTitle = Template.bind({});
export const CustomIcon = Template.bind({});
export const Action = Template.bind({});
export const TopLeft = Template.bind({});
export const BottomRight = Template.bind({});
export const BottomLeft = Template.bind({});
export const CustomClearTime = Template.bind({});

Info.args = {
  text: 'Info toast message',
};

Success.args = {
  text: 'Success toast message',
  variant: 'success',
};

Warning.args = {
  text: 'Warning toast message',
  variant: 'warning',
};

Error.args = {
  text: 'Error toast message',
  variant: 'error',
};

WithTitle.args = {
  title: 'Title',
  text: 'You can display any message that you want',
};

CustomIcon.args = {
  text: 'Im an alert with a custom icon',
  customIcon: <GiButterflyWarning size={25} color='#4567ff' />,
};

Action.args = {
  text: 'You can display any message that you want',
  action: () =>
    alert(
      'You can place any function that you want, this just triggers an alert. Also the content of the button could be string | ReactNode'
    ),
  actionElement: 'FUNC',
};

TopLeft.args = {
  text: 'Top left toast message',
  position: 'topLeft',
};

BottomRight.args = {
  text: 'Bottom right toast message',
  position: 'bottomRight',
};

BottomLeft.args = {
  text: 'Bottom left toast message',
  position: 'bottomLeft',
};

CustomClearTime.args = {
  text: 'I will close after 10 seconds, the default value is 5000(ms)',
  clearAfter: 10000,
};
