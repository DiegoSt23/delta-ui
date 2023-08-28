import { StoryFn, Meta } from '@storybook/react';
import { TextArea, TextAreaProps } from '../../components';

export default {
  title: 'DeltaUI/TextArea',
  component: TextArea,
  argTypes: {},
} as Meta<typeof TextArea>;

const Template: StoryFn<TextAreaProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: 20,
    }}
  >
    <TextArea {...args} />
  </div>
);

export const Default = Template.bind({});
export const Label = Template.bind({});
export const HelperText = Template.bind({});
export const Disabled = Template.bind({});
export const Error = Template.bind({});
export const FullWidth = Template.bind({});
export const CustomRowsNumber = Template.bind({});

Default.args = {
  onChange: (val) => console.log(val),
};

Label.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
};

HelperText.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
  helperText: 'Helper text',
};

Disabled.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};

Error.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};

FullWidth.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
  helperText: 'Helper text',
  fullWidth: true,
};

CustomRowsNumber.args = {
  onChange: (val) => console.log(val),
  label: 'Label',
  helperText: 'Helper text',
  fullWidth: true,
  numberOfRows: 10,
};
