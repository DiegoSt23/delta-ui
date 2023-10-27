import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Button, Modal, ModalProps, Typography } from '../../components';

export default {
  title: 'DeltaUI/Modal',
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: 20,
      }}
    >
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>
  );
};

export const Small = Template.bind({});
export const Mid = Template.bind({});
export const Large = Template.bind({});
export const ExtraLarge = Template.bind({});
export const CustomCloseButton = Template.bind({});
export const WithHeader = Template.bind({});
export const WithFooter = Template.bind({});
export const Complete = Template.bind({});

const content = (
  <Typography>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore
    possimus labore quis nam praesentium, cumque quae corporis, vitae ducimus
    delectus ipsam maiores modi saepe tenetur, molestias minus quos.Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Aliquid dolore possimus labore
    quis nam praesentium, cumque quae corporis, vitae ducimus delectus ipsam
    maiores modi saepe tenetur, molestias minus quos. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Aliquid dolore possimus labore quis nam
    praesentium, cumque quae corporis, vitae ducimus delectus ipsam maiores modi
    saepe tenetur, molestias minus quos.
  </Typography>
);

Small.args = {
  children: content,
  size: 'sm',
};

Mid.args = {
  children: content,
  size: 'md',
};

Large.args = {
  children: content,
  size: 'lg',
};

ExtraLarge.args = {
  children: content,
  size: 'xl',
};

CustomCloseButton.args = {
  children: content,
  customCloseIcon: (
    <IoIosCloseCircleOutline size={25} color="gray" />
  )
};

WithHeader.args = {
  children: content,
  headerTitle: 'Modal Title'
};

WithFooter.args = {
  children: content,
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>
        Accept
      </Button>
    </div>
  ),
};

Complete.args = {
  children: content,
  headerTitle: 'Modal Title',
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>
        Accept
      </Button>
    </div>
  ),
};
