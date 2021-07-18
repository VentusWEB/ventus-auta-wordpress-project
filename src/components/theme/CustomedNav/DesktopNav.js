import React/* , { useEffect, useRef, useState } */ from "react"
import { Link } from "gatsby"


import AnchorLink from 'react-anchor-link-smooth-scroll';

import { StyledMobileLogo, LogoBox, StyledHeader } from "./styles"
import Toggler from './Toggler';

/* import { supportsPassiveEvents } from 'detect-it'; */

const DesktopNavMenu = ({ links }) => {
  /*   const [background, setBackground] = useState(false)
    const navRef = useRef()
  
    navRef.current = background
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 20
        if (navRef.current !== show) {
          setBackground(show)
        }
      }
      if (supportsPassiveEvents) {
        // passive events are supported by the browser
        document.addEventListener('scroll', handleScroll, {
          capture: false,
          passive: true,
        });
      } else {
        // passive events are not supported by the browser
        document.addEventListener('scroll', handleScroll, false);
      }
  
      return () => {
        document.removeEventListener("scroll", handleScroll, { passive: true })
      }
    }, []) */

  return (
    <StyledHeader /* background={background} */>
      <ul>
        <li>
          <LogoBox to="/">
            <StyledMobileLogo /><h3>ventus trade</h3>
          </LogoBox>

        </li>
        {
          links.map(link => {
            return (
              <>
                {
                  link.scrollId && (
                    <li><AnchorLink href={link.scrollId}>{link.name}</AnchorLink></li>
                  )}

                {
                  link.path && (
                    <li><Link href={link.path}>{link.name}</Link></li>
                  )}

              </>
            )
          })
        }
        <Toggler />
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu

