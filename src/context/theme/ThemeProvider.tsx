import { createContext, ReactNode } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: ReactNode;
  theme: 'Light' | 'Dark';
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);