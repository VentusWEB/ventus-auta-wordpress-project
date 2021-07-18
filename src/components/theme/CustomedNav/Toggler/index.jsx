import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import Toggle from 'react-toggle';
import { ToggleWrapper, ToggleIcons } from './styles'

const Toggler = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleWrapper>
      <Toggle
        icons={{
          checked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☾</ToggleIcons>,
          unchecked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☼</ToggleIcons>,
        }}
        onChange={toggleTheme}
      />
    </ToggleWrapper>
  );
};

export default Toggler;
