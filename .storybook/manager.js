import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import delta from '../src/assets/svg/delta.svg';

const theme = create({
  base: 'dark',
  brandTitle: 'Delta UI',
  brandImage: delta,
  brandTarget: '_self',
});

addons.setConfig({
  theme: theme,
});
