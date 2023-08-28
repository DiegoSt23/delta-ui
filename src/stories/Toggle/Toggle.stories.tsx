import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toggle, ToggleProps } from '../../components';

export default {
  title: 'DeltaUI/Toggle',
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>;

const Template: StoryFn<ToggleProps> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        padding: 20,
      }}
    >
      <Toggle
        {...args}
        isActive={isActive}
        onChange={(val) => setIsActive(val)}
      />
    </div>
  );
};

export const Small = Template.bind({});
export const Mid = Template.bind({});
export const Large = Template.bind({});
export const WithLabel = Template.bind({});
export const CustomColor = Template.bind({});
export const Disabled = Template.bind({});

Small.args = {
  size: 'sm',
};

Mid.args = {
  size: 'md',
};

Large.args = {
  size: 'lg',
};

WithLabel.args = {
  size: 'md',
  label: 'Label',
};

CustomColor.args = {
  buttonColor: '#4f3178',
  color: '#ff3f4f',
};

Disabled.args = {
  size: 'md',
  disabled: true,
};
