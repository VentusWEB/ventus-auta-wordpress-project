import React, { useState } from "react"
import uuid from 'react-uuid'
import { graphql, useStaticQuery, Link } from "gatsby"

import { BackLink, ScrollLinkUl, TogglerBurgerBox, MenuBar, MenuIconContainer, MenuIcon, MenuLinks, MenuContentBox, BrandLink, BrandIdentity, BrandLogoBox } from "./styles"

import { /* , SocialLinks */ } from 'components/theme';

import { NavButton, ToggleButton } from 'components/common'

import { RiArrowGoBackLine } from "@react-icons/all-files/ri/RiArrowGoBackLine"


import scrollTo from "gatsby-plugin-smoothscroll"
import Scrollspy from "react-scrollspy"
import { GatsbyImage } from "gatsby-plugin-image";



export const Navbar = ({ menuItems, buttonsArray, comeBack, AttachmentArray }) => {

  const { siteIdentity } = useStaticQuery(graphql`
    {
      siteIdentity: wpVentusautacore(slug: {eq: "site-content"}) {
        siteLogo {
          localFile {
            ...FileFragmentSvg
            ...FileFragmentImg
            }
        }

          siteSlogan
          siteTitle
          siteDescription
          siteBrand
    
    }
  }
  `)

  const {
    siteLogo,
    siteSlogan,
    siteBrand,
  } = siteIdentity;



    if (!siteIdentity) return null

  const [menuOpen, toggleMenuOpen] = useState(false)



  const [isVisible, setVisibility] = useState(false)


  let showStyle = null
  if (isVisible) {
    showStyle = { color: 'red' }
  } else {
    showStyle = null
  }
 

  const icon = siteLogo.localFile.childSvg

  const img = siteLogo.localFile.childImageSharp


  return (
    <MenuBar >
      <MenuContentBox>


        <BrandLink aria-label="Home" to="/">
          {
            icon ?
            <BrandLogoBox dangerouslySetInnerHTML={{ __html: icon.content.data }} />
            :
            img ?
            <BrandLogoBox>
              <GatsbyImage
              image={img}
              alt={siteLogo.altText}
              />
            </BrandLogoBox>
            :
            null
          }
 
          <BrandIdentity>
            <h2>{siteBrand}</h2>
            <h5>{siteSlogan}</h5>
          </BrandIdentity>
        </BrandLink>
      </MenuContentBox>
      {menuItems ?  (
        <ScrollLinkUl
          menuOpen={menuOpen}
          style={showStyle}
          items={menuItems.map(a => a.path)}
          currentClassName="current"
          offset={-60} >

          {menuItems.map(value => {
            return (
              <li key={uuid()} css={`{ order: ${value.order}; }`}>
                <NavButton onClick={() => {
                  scrollTo('#' + value.path)
                  setVisibility(0)
                  toggleMenuOpen(false)
                }
                }>
                  {value.label}
                </NavButton>
              </li>
            )
          })}

          {/* {Object.keys(buttonsArray).map(((keyName, i) => {

            const buttons = buttonsArray[keyName].multiBox;

            const buttonNames = buttons.map((item, i) => {
              if (item['type'] == "content") {
                return item
              }
            })
            //check for content option just to be safe

            const buttonHrefs = buttons.map((item, i) => {
              if (item['type'] == "href") {
                return item
              }
            })
            //check for content option just to be safe

            const buttonName = buttonNames
              .filter(item => item !== undefined)[0]['content']

            const buttonHref = buttonHrefs
              .filter(item => item !== undefined)[0]['content']

            return (
              <>
                <Link key={uuid()} css={`{ order: 100; }`} to={buttonHref}><Button >{buttonName}</Button></Link>
              </>
            )

          }))
          } */}
        </ScrollLinkUl>) :
         
         <li>
         <NavButton>
           <Link to='/'>strona główna</Link>
         </NavButton>
       </li>

         }



      <TogglerBurgerBox>
 
        <ToggleButton />
        {menuItems ? (
          <>
            <MenuIconContainer>
              <MenuIcon aria-label="Menu" menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                <div />
                <div />
                <div />
              </MenuIcon>
            </MenuIconContainer>

            <MenuLinks menuOpen={menuOpen}>
              <Scrollspy
                className="nav mobile"
                style={showStyle}
                items={menuItems.map(a => a.path)}
                currentClassName="current"
                offset={60} >

                {menuItems.map(value => {
                  return (
                    <li key={uuid()} css={`{ order: ${value.order}; }`}>
                      <NavButton small onClick={() => {
                        scrollTo('#' + value.path)
                        setVisibility(0)
                        toggleMenuOpen(!menuOpen)
                      }
                      }>
                        {value.label}
                      </NavButton>
                    </li>
                  )
                })}

              </Scrollspy>

            </MenuLinks>


          </>) : (<BackLink aria-label="Back" to="/"> <RiArrowGoBackLine /> </BackLink>) }

      </TogglerBurgerBox>
    </MenuBar>
  )
}
