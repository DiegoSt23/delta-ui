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
    }}
  >
    <SideNavBar {...args} />
  </div>
);

export const Default = Template.bind({});
export const WithMainIcon = Template.bind({});
export const WithBottomItems = Template.bind({});

const items = [
  {
    name: 'Home',
    icon: <RiHomeLine size={20} />,
    onClick: () => console.log('home triggered'),
    isActive: true,
  },
  {
    name: 'Search',
    icon: <AiOutlineSearch size={20} />,
    onClick: () => console.log('option 1 triggered'),
    isActive: false,
  },
  {
    name: 'Albums',
    icon: <BiLibrary size={20} />,
    onClick: () => console.log('option 2 triggered'),
    isActive: false,
  },
  {
    name: 'Playlists',
    icon: <IoMdAlbums size={20} />,
    onClick: () => console.log('option 3 triggered'),
    isActive: false,
  },
  {
    name: 'Songs',
    icon: <IoIosMusicalNote size={20} />,
    onClick: () => console.log('option 4 triggered'),
    isActive: false,
  },
];

const bottomItems = [
  {
    name: 'Settings',
    icon: <BsGearWide size={20} />,
    onClick: () => console.log('option 6 triggered'),
    isActive: false,
  },
  {
    name: 'Profile',
    icon: <BsPersonCircle size={20} />,
    onClick: () => console.log('option 5 triggered'),
    isActive: false,
  },
];

Default.args = {
  items,
};

WithMainIcon.args = {
  items,
  mainIcon: <BsSpotify size={30} color='#60e02d' />,
  onClickMainIcon: () => console.log('main icon pressed'),
};

WithBottomItems.args = {
  items,
  mainIcon: <BsSpotify size={30} color='#60e02d' />,
  onClickMainIcon: () => console.log('main icon pressed'),
  bottomItems,
};
