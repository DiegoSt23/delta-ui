import React from 'react';
import { ThemeProvider } from '../src/context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    defaultBackground: 'Dark',
    values: [
      {
        name: 'Light',
        value: '#fff',
      },
      {
        name: 'Dark',
        value: '#000000',
      },
    ],
  },
};

export const decorators = [
  (Story, {  globals }) => {
    const { backgrounds: { value } } = globals;
    const theme = ['#fff', 'transparent'].includes(value) ? 'Light' : 'Dark';

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
