import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AiOutlineFire } from 'react-icons/ai';
import {
  Button,
  Drawer,
  DrawerProps,
  Typography,
} from '../../components';

export default {
  title: 'DeltaUI/Drawer',
  component: Drawer,
  argTypes: {},
} as Meta<typeof Drawer>;

const Template: StoryFn<DrawerProps> = (args) => {
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
      <Drawer {...args} isOpen={isOpen} onClose={handleOpenModal}>
        <Typography type='paragraph'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus reiciendis labore ad, at quo ea doloremque accusamus
          beatae blanditiis fuga quis vitae porro amet alias debitis. Quod,
          exercitationem. Odio, deleniti. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus reiciendis labore ad, at
          quo ea doloremque accusamus beatae blanditiis fuga quis vitae porro
          amet alias debitis. Quod, exercitationem. Odio, deleniti. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis
          labore ad, at quo ea doloremque accusamus beatae blanditiis fuga quis
          vitae porro amet alias debitis. Quod, exercitationem. Odio, deleniti.
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            marginTop: 20,
          }}
        >
          <Button small onClick={handleOpenModal} variant='filled'>
            Close
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export const Left = Template.bind({});
export const Right = Template.bind({});
export const Top = Template.bind({});
export const Bottom = Template.bind({});

Right.args = {
  position: 'right'
}

Top.args = {
  position: 'top',
};

Bottom.args = {
  position: 'bottom',
};
