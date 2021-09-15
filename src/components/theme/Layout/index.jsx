import React, { useContext } from 'react';
import { graphql, useStaticQuery } from "gatsby";
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

  const { ThemeData, bottomNavContent, footerLinkContent, footerSocialIcons, footerContentData } = useStaticQuery(
    graphql`
      query {

        ThemeData: wpVentusautacore(slug: {eq: "theme-content"}) {
          primary
          primaryLight
          secondary
          secondaryLight
          third
          thirdDarkmode
          moveFillBgTop
          moveFillBgBottom
          fontColor
          background
        }

        footerSocialIcons: wpVentusautacore(slug: {eq: "links-content"}) {
          phoneFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

            facebookFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

            googleMyBusinessFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

        }

        footerLinkContent: wpVentusautacore(slug: {eq: "links-content"}) {
          footerInfo {
              multiBox {
                content
                title
              }
            }
          }

          footerContentData: wpVentusautacore(slug: {eq: "site-content"}) {
            siteTitle
            siteSlogan
          }

          bottomNavContent: wpVentusautacore(slug: {eq: "bottom-nav-content"}) {
            button1 {
              multiBox {
                content
                title
                type
              }
            }
            button2 {
              multiBox {
                content
                title
                type
              }
            }
          }
      }
`
);



const {
  primary,
  primaryLight,
  secondary,
  secondaryLight,
  third,
  moveFillBgTop,
  moveFillBgBottom,
  thirdDarkmode,
  moveFillBgTopDarkmode,
  moveFillBgBottomDarkmode,
  fontColor,
  background

} = ThemeData

const color = theme.colors
const colorDark = themeDark.colors

/* light mode */

color.primary = primary ? primary : color.primary
color.primaryLight = primaryLight ? primaryLight : color.primaryLight
color.secondary = secondary ? secondary : color.secondary
color.secondaryLight = secondaryLight ? secondaryLight : color.secondaryLight
color.third = third ? third : color.third 
color.moveFillBg = ( moveFillBgTop && moveFillBgBottom) ? `linear-gradient(to bottom, ${moveFillBgTop}, ${moveFillBgBottom})` : color.moveFillBg
color.fontColor = fontColor ? fontColor : color.fontColor
color.background = background ? background : color.background

/* dark mode */

colorDark.primaryLight = primary ? primary : colorDark.primary
colorDark.primary = primaryLight ? primaryLight : colorDark.primaryLight
colorDark.secondaryLight = secondary ? secondary : colorDark.secondary
colorDark.secondary = secondaryLight ? secondaryLight : colorDark.secondaryLight
colorDark.third = thirdDarkmode ? thirdDarkmode : colorDark.third 
colorDark.moveFillBg = ( moveFillBgTopDarkmode && moveFillBgBottomDarkmode) ? `linear-gradient(to bottom, ${moveFillBgTopDarkmode}, ${moveFillBgBottomDarkmode})` : colorDark.moveFillBg
colorDark.fontColor = background ? background : colorDark.fontColor
colorDark.background = fontColor ? fontColor : colorDark.background

  return (
    <>
      <ThemeProviderStyle theme={themeMode == 'light' ? theme : themeDark} >
        <Global theme={themeMode == 'light' ? theme : themeDark} />
{/*         <CustomedNav links={alternativeLinks ? alternativeLinks : links} /> */}
        {/*         <CookiesBanner showBelow={250} /> */}
{/*         <ScrollBtn showBelow={250} /> */}
        {children}
        <BottomNav contactData={bottomNavContent} />
        <CustomedFooter footerLinkContent={footerLinkContent} footerSocialIcons={footerSocialIcons} footerContentData={footerContentData}/>
      </ThemeProviderStyle>
    </>

  );
};
