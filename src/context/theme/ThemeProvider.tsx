/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ValueProps {
  isDark: boolean;
  theme: 'Light' | 'Dark';
  switchTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme?: 'Light' | 'Dark';
}

const defaultProps: Partial<ThemeProviderProps> = {
  theme: 'Dark',
};

export const ThemeContext = createContext<ValueProps>({
  isDark: true,
  theme: 'Dark',
  switchTheme: () => {
    console.log('Provider test')
  },
});

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<'Light' | 'Dark'>(theme ?? 'Dark');

  const handleSwitchTheme = () => {
    if (currentTheme === 'Dark') {
      setCurrentTheme('Light');
      return;
    }

    setCurrentTheme('Dark');
  };

  const value: ValueProps = {
    isDark: currentTheme === 'Dark',
    theme: currentTheme,
    switchTheme: handleSwitchTheme,
  };

  useEffect(() => {
    if (theme) setCurrentTheme(theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

ThemeProvider.defaultProps = defaultProps;
