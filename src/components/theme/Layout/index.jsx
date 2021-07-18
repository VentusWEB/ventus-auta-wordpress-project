import React, { useContext } from 'react';
import { ThemeProvider as ThemeProviderStyle } from "styled-components";
import { themeStyleLight as theme } from "styles";
import { themeStyleDark as themeDark } from "styles";
import { ThemeContext } from 'providers/ThemeProvider';
import { CustomedFooter } from 'components/theme';
import { Global } from 'styles';
import { CustomedNav } from 'components/theme/CustomedNav';
import { links, contactNav } from "constans"
import { ScrollBtn } from "interactions"
import { BottomNav } from "components/common"

/* import CookiesBanner from "components/theme/CookiesBanner/CookiesBanner" */

import './fonts.css';

export const Layout = ({ children, alternativeLinks }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <>
      <ThemeProviderStyle theme={themeMode == 'light' ? theme : themeDark} >
        <Global theme={themeMode == 'light' ? theme : themeDark} />
        <CustomedNav links={alternativeLinks ? alternativeLinks : links} />
        {/*         <CookiesBanner showBelow={250} /> */}
        <ScrollBtn showBelow={250} />
        {children}
        <BottomNav contactData={contactNav} />
        <CustomedFooter />
      </ThemeProviderStyle>
    </>

  );
};
