import { StoryFn, Meta } from '@storybook/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoTrashOutline } from 'react-icons/io5';
import { IoMdCheckmark } from 'react-icons/io';
// import { IoMdCheckmark } from 'react-icons/bi';
import { Table, TableProps, Card, Button } from '../../components';

export default {
  title: 'DeltaUI/Table',
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      overflowY: 'auto',
      padding: 20,
    }}
  >
    <Card headerTitle='Shingeki' fullWidth>
      <Table {...args} />
    </Card>
    {/* <Table {...args} /> */}
  </div>
);

export const Default = Template.bind({});
export const CustomMinWidth = Template.bind({});
export const Underline = Template.bind({});
export const LabelOptions = Template.bind({});
export const LabelOptionsCustomIcon = Template.bind({});
export const CheckboxSelection = Template.bind({});
export const Loading = Template.bind({});
export const CustomItem = Template.bind({});

const labels = [
  {
    content: 'First Name',
    numberOfColumns: 3,
  },
  {
    content: 'Last Name',
    numberOfColumns: 3,
  },
  {
    content: 'Email',
    numberOfColumns: 3,
  },
  {
    content: 'Status',
  },
];

const labels2 = [
  {
    content: 'First Name',
    numberOfColumns: 4,
  },
  {
    content: 'Last Name',
    numberOfColumns: 4,
  },
  {
    content: 'Email',
    numberOfColumns: 4,
  },
  {
    content: 'Status',
    numberOfColumns: 3,
  },
  {
    content: 'Actions',
    numberOfColumns: 2,
  },
];

const labelsWithOptions = [
  {
    content: 'First Name',
    numberOfColumns: 3,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Last Name',
    numberOfColumns: 3,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Email',
    numberOfColumns: 3,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Status',
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
];

const labelsWithOptionsCustomIcon = [
  {
    content: 'First Name',
    numberOfColumns: 3,
    optionsMenuIcon: <RiArrowDropDownLine color='gray' size={20} />,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Last Name',
    numberOfColumns: 3,
    optionsMenuIcon: <RiArrowDropDownLine color='gray' size={20} />,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Email',
    numberOfColumns: 3,
    optionsMenuIcon: <RiArrowDropDownLine color='gray' size={20} />,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
  {
    content: 'Status',
    optionsMenuIcon: <RiArrowDropDownLine color='gray' size={20} />,
    options: [
      {
        item: 'Option1',
        action: () => console.log('Option 1 triggered'),
      },
      {
        item: 'Option2',
        action: () => console.log('Option 2 triggered'),
      },
    ],
  },
];

const items = [
  {
    firstName: 'Eren',
    lastName: 'Jaeger',
    email: 'eren@mail.com',
    status: 'Active',
    id: '@eren',
  },
  {
    firstName: 'Levi',
    lastName: 'Ackerman',
    email: 'levi@mail.com',
    status: 'Active',
    id: '@levi',
  },
  {
    firstName: 'Erwin',
    lastName: 'Smith',
    email: 'erwin@mail.com',
    status: 'Inactive',
    id: '@erwin',
  },
  {
    firstName: 'Mikasa',
    lastName: 'Ackerman',
    email: 'mikasa@mail.com',
    status: 'Active',
    id: '@mikasa',
  },
  {
    firstName: 'Annie',
    lastName: 'Leonhart',
    email: 'annie@mail.com',
    status: 'Active',
    id: '@annie',
  },
  {
    firstName: 'Hange',
    lastName: 'Zoe',
    email: 'hange@mail.com',
    status: 'Inactive',
    id: '@hange',
  },
  {
    firstName: 'Reiner',
    lastName: 'Braun',
    email: 'reiner@mail.com',
    status: 'Active',
    id: '@reiner',
  },
];

const itemsWithCustomElement = [
  {
    firstName: 'Eren',
    lastName: 'Jaeger',
    email: 'eren@mail.com',
    status: 'Active',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@eren',
  },
  {
    firstName: 'Levi',
    lastName: 'Ackerman',
    email: 'levi@mail.com',
    status: 'Active',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@levi',
  },
  {
    firstName: 'Erwin',
    lastName: 'Smith',
    email: 'erwin@mail.com',
    status: 'Inactive',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@erwin',
  },
  {
    firstName: 'Mikasa',
    lastName: 'Ackerman',
    email: 'mikasa@mail.com',
    status: 'Active',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@mikasa',
  },
  {
    firstName: 'Annie',
    lastName: 'Leonhart',
    email: 'annie@mail.com',
    status: 'Active',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@annie',
  },
  {
    firstName: 'Hange',
    lastName: 'Zoe',
    email: 'hange@mail.com',
    status: 'Inactive',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@hange',
  },
  {
    firstName: 'Reiner',
    lastName: 'Braun',
    email: 'reiner@mail.com',
    status: 'Active',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <Button small>
          <IoTrashOutline size={20} />
        </Button>
        <Button small>
          <IoMdCheckmark size={20} />
        </Button>
      </div>
    ),
    id: '@reiner',
  },
];

Default.args = {
  labels,
  items,
  justifyContent: 'flex-start',
};

CustomMinWidth.args = {
  labels,
  items,
  justifyContent: 'flex-start',
  minWidth: 1500,
};

Underline.args = {
  labels,
  items,
  justifyContent: 'flex-start',
  underline: true,
};

LabelOptions.args = {
  labels: labelsWithOptions,
  items,
  justifyContent: 'flex-start',
  underline: true,
};

LabelOptionsCustomIcon.args = {
  labels: labelsWithOptionsCustomIcon,
  items,
  justifyContent: 'flex-start',
  underline: true,
};

CheckboxSelection.args = {
  labels,
  items,
  justifyContent: 'flex-start',
  underline: true,
  checkboxSelection: true,
  onRowsSelection: (values) => console.log(values),
};

Loading.args = {
  labels,
  items,
  justifyContent: 'flex-start',
  loading: true,
};

CustomItem.args = {
  minWidth: 1000,
  labels: labels2,
  items: itemsWithCustomElement,
  justifyContent: 'flex-start',
  underline: true,
  onRowsSelection: (values) => console.log(values),
};
