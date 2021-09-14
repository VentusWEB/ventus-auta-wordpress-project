import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import scrollTo from "gatsby-plugin-smoothscroll"


import uuid from 'react-uuid'

import { LogoBox, StyledHeader, ScrollLinkUl, MenuIconContainer, MenuIcon, DesktopToggler,  TopHeaderBox, TogglerBurgerBox } from "./styles"
import { NavButton, Button } from 'components/common'
import Toggler from './Toggler';

export const CustomedNav = ({ /* siteTitle,  */menuItems, scroll, Title, LogoImg, LogoAlt}) => {

        const { HeaderData } = useStaticQuery(
            graphql`
                query {
                  HeaderData: wpVentusautacore(slug: {eq: "site-content"}) {
                        siteTitle
                        siteSubTitle
                        siteLogo {
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
                `
        );

        const { siteTitle, siteSubTitle, siteLogo } = HeaderData

        const icon = siteLogo?.localFile.childSvg

        const img = siteLogo?.localFile.childImageSharp

  const [isVisible, setVisibility] = useState(false)
  const [menuOpen, toggleMenuOpen] = useState(false)
  const liRef = useRef(null)
  const boxRef = useRef(null)
  useEffect(() => {
    const div = liRef.current;
    console.log(liRef)
  }, [liRef]);

  let showStyle = null
  if (isVisible) {
    showStyle = { color: 'red' }
  } else {
    showStyle = null
  }
 

  return (
    <>


<StyledHeader boxHeight={boxRef.current?.offsetHeight} height={liRef.current?.offsetHeight} items={menuItems? menuItems.length : 5} menuOpen={menuOpen}>
<TopHeaderBox  ref={boxRef}>

    <LogoBox to="/">
    {
                img ?
                <GatsbyImage image={LogoImg?.localFile.childImageSharp ? LogoImg.localFile.childImageSharp.gatsbyImageData : siteLogo.localFile.childImageSharp.gatsbyImageData} alt={LogoAlt ? LogoAlt : siteTitle} />
                :
                icon ?
                <section
                key={uuid()}
                dangerouslySetInnerHTML={{ __html: LogoImg?.localFile.childSvg ? siteLogo?.localFile.childSvg.content.data : icon.content.data }}
                />
                :
                null
            }
        <h3>{Title ? Title : siteTitle}</h3>
      </LogoBox>
  <TogglerBurgerBox>
  {!menuItems ? <Button small><Link to='/'>strona główna</Link></Button> : null  }
        <Toggler />
        {menuItems ?
                <MenuIconContainer>
                <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                  <div />
                  <div />
                  <div />
                </MenuIcon>
              </MenuIconContainer>
              :
            null
      }

        </TogglerBurgerBox>
        </TopHeaderBox>


        {menuItems ?
        (<ScrollLinkUl
          style={showStyle}
          items={menuItems.map(a => a.path)}
          currentClassName="current"
          
          >


            


          {menuItems.map(value => {



            if(scroll==true) {
              return (

              
                <li key={uuid()} css={`{ order: ${value.order}; }`} >
                  <NavButton ref={liRef}
                                       css={`{
                                        white-space: nowrap;
                                      }
                                      `}
                                      onClick={() => {
                    scrollTo('#' + value.path)
                    setVisibility(0)
                  }
                  }>
                    {value.label}
                  </NavButton>
                </li>
  
                
              )
            }
            else {
              return(
                <li><Link
                ref={liRef}
                activeStyle={{ color: "red" }}
                  to={`/${value.path}` || '/'}>{value.label}</Link></li>
              )
            }

          })}

        </ScrollLinkUl>)


      :

null

    
    }
      <DesktopToggler>
      {!menuItems ? <Button small><Link to='/'>strona główna</Link></Button> : null  }
       <Toggler />
       <MenuIconContainer>
                <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                  <div />
                  <div />
                  <div />
                </MenuIcon>
              </MenuIconContainer>
      </DesktopToggler>
    </StyledHeader>
    </>
  )
}
CustomedNav.propTypes = {
  siteTitle: PropTypes.string,
}

CustomedNav.defaultProps = {
  siteTitle: ``,
}

