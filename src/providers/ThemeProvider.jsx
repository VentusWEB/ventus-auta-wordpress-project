import React, { createContext } from "react";
import useDarkMode from "hooks/useDarkMode";

export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
	const [themeMode, toggleTheme] = useDarkMode();

	return (
		<ThemeContext.Provider
			value={{
				themeMode,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
