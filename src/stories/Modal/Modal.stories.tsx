import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, Modal, ModalProps, Typography , Menu} from '../../components';

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
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>
  );
};

export const Small = Template.bind({});
export const Mid = Template.bind({});
export const Large = Template.bind({});
export const ExtraLarge = Template.bind({});
export const WithHeader = Template.bind({});
export const WithHeaderElement = Template.bind({});
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

WithHeader.args = {
  children: content,
  headerTitle: 'Modal Title',
};

WithHeaderElement.args = {
  children: content,
  headerTitle: 'Modal Title',
  headerElement: (
    <Menu
      position='left'
      width={90}
      items={[
        {
          title: 'Option 1',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 2',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 3',
          onClick: () => console.log('Option 1 triggered'),
        },
      ]}
    />
  ),
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
  headerTitle: 'Card Title',
  headerElement: (
    <Menu
      position='left'
      width={90}
      items={[
        {
          title: 'Option 1',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 2',
          onClick: () => console.log('Option 1 triggered'),
        },
        {
          title: 'Option 3',
          onClick: () => console.log('Option 1 triggered'),
        },
      ]}
    />
  ),
  footer: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
      <Button small>Cancel</Button>
      <Button variant='filled' small>
        Accept
      </Button>
    </div>
  ),
};
