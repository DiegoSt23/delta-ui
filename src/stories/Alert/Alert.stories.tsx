import { StoryFn, Meta } from '@storybook/react';
import { GiButterflyWarning } from 'react-icons/gi';
import { Alert, AlertProps } from '../../components';

export default {
  title: 'DeltaUI/Alert',
  component: Alert,
  argTypes: {},
} as Meta<typeof Alert>;

const Template: StoryFn<AlertProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: 20,
    }}
  >
    <Alert {...args} />
  </div>
);

export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const WithTitle = Template.bind({});
export const CustomIcon = Template.bind({});
export const Action = Template.bind({});
export const FullWidth = Template.bind({});

Info.args = {
  text: 'You can display any message that you want',
};

Success.args = {
  text: 'You can display any message that you want',
  variant: 'success',
};

Warning.args = {
  text: 'You can display any message that you want',
  variant: 'warning',
};

Error.args = {
  text: 'You can display any message that you want',
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
  action: () => alert('You can place any function that you want, this just triggers an alert. Also the content of the button could be string | ReactNode'),
  actionElement: 'FUNC',
};

FullWidth.args = {
  text: 'You can display any message that you want',
  fullWidth: true,
};
