import { useState, useEffect } from 'react';
/* import useMedia from 'hooks/useMedia'; */

const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');

  const toggleTheme = () => {
    if (themeMode === 'light') {
      window.localStorage.setItem('themeMode', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('themeMode', 'light');
      setTheme('light');
    }
  };

  /*   const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false); */

  /*   useEffect(() => {
      const localTheme = window.localStorage.getItem('themeMode');
      if (localTheme) {
        window.localStorage.setItem('themeMode', localTheme);
        setTheme(localTheme);
      } else if (prefersDarkMode) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, [prefersDarkMode]); */

  return [themeMode, toggleTheme];
};

export default useDarkMode