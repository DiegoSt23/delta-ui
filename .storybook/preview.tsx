import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
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
    disable: true,
  },
};

export const decorators = [
  (Story) => {
    const isDarkTheme = useDarkMode();

    return (
      <ThemeProvider theme={isDarkTheme ? 'Dark' : 'Light'}>
        <div style={{ width: '100%', height: '100vh', backgroundColor: isDarkTheme ? '#000000' : '#fff' }}>
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];
