 import React, { useState, useEffect } from "react"
 import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
 import styled, { keyframes }  from "styled-components"
 import { Link } from "gatsby"
 

 
 const CookiesBanner = ({ showBelow }) => {

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
          if (!show) setShow(true)
      } else {
          if (show) setShow(false)
      }
  }

  useEffect(() => {
      if (showBelow) {
          window.addEventListener(`scroll`, handleScroll)
          return () => window.removeEventListener(`scroll`, handleScroll)
      }
  }, [])
 
 
   return (
     <>
            {show &&

             <CookieConsent
             location="top"
             buttonText="Wszystko jasne!"
             cookieName="myAwesomeCookieName2"
             style={{
              animation: `coockieBoxAnimation .5s ease-in-out normal forwards`, 
              animationIterationCount: "1", 
              transition: "all .5s ease-in-out",
              zIndex: "10000"
             }}
             buttonStyle={{ background: `${({ theme }) => theme.colors.secondary}`, fontSize: "12px" }}
             expires={150}
             onAccept={() => {
              console.log(getCookieConsentValue())
            }}
           >
             <span style={{ fontSize: "10px" }}>Odwiedzana strona wykorzystuje Ciasteczka. Korzystając z niej bezpośrednio zostaje na to wyrażona zgoda. Więcej na ten temat w <PoliceLink to="/polityka-prywatnosci">Polityce Prywatności</PoliceLink></span>

         </CookieConsent>

            }


     </>
   )
 }
 

 
 export default CookiesBanner


 const PoliceLink = styled(Link)`
 color: ${({ theme }) => theme.colors.secondary};
 text-decoration: none;
 transition: 1s;

  &:hover{
    color: green;
  }
 `
