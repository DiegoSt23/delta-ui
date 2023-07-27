import { StoryFn, Meta } from '@storybook/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiHomeLine } from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
import { IoMdAlbums, IoIosMusicalNote } from 'react-icons/io';
import { BsPersonCircle, BsSpotify, BsGearWide } from 'react-icons/bs';
import { SideNavBar, SideNavBarProps } from '../../components';

export default {
  title: 'DeltaUI/SideNavBar',
  component: SideNavBar,
  argTypes: {},
} as Meta<typeof SideNavBar>;

const Template: StoryFn<SideNavBarProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#000000',
    }}
  >
    <SideNavBar {...args} />
  </div>
);

export const Centered = Template.bind({});
export const CenteredWithMainIcon = Template.bind({});
export const Start = Template.bind({});
export const StartWithMainIcon = Template.bind({});

const items = [
  {
    name: 'Home',
    icon: <RiHomeLine size={20} />,
    onClick: () => console.log('home triggered'),
    isActive: true,
  },
  {
    name: 'Option 1',
    icon: <AiOutlineSearch size={20} />,
    onClick: () => console.log('option 1 triggered'),
    isActive: false,
  },
  {
    name: 'Option 2',
    icon: <BiLibrary size={20} />,
    onClick: () => console.log('option 2 triggered'),
    isActive: false,
  },
  {
    name: 'Option 3',
    icon: <IoMdAlbums size={20} />,
    onClick: () => console.log('option 3 triggered'),
    isActive: false,
  },
  {
    name: 'Option 4',
    icon: <IoIosMusicalNote size={20} />,
    onClick: () => console.log('option 4 triggered'),
    isActive: false,
  },
  {
    name: 'Option 5',
    icon: <BsPersonCircle size={20} />,
    onClick: () => console.log('option 5 triggered'),
    isActive: false,
  },
  {
    name: 'Option 6',
    icon: <BsGearWide size={20} />,
    onClick: () => console.log('option 6 triggered'),
    isActive: false,
  },
];

Centered.args = {
  items,
};

CenteredWithMainIcon.args = {
  items,
  mainIcon: <BsSpotify size={30} color='#60e02d' />,
  onClickMainIcon: () => console.log('main icon pressed'),
};

Start.args = {
  items,
  itemsPosition: 'start',
};

StartWithMainIcon.args = {
  items,
  mainIcon: <BsSpotify size={30} color='#60e02d' />,
  onClickMainIcon: () => console.log('main icon pressed'),
  itemsPosition: 'start',
};
