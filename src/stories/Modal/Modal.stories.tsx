import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
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
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        padding: 60,
      }}
    >
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dolore possimus labore quis nam praesentium, cumque quae corporis,
          vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias
          minus quos. Soluta?
        </Typography>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  headerTitle: 'Modal Title',
  size: 'md',
};
