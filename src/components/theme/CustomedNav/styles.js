import styled from 'styled-components'
import { ReactComponent as MobileLogo } from "assets/svgs/vt-logo-full.svg"
import { Link } from "gatsby"

import Scrollspy from "react-scrollspy"


/* Combined */

export const TopHeaderBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
`
export const TogglerBurgerSection= styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
order: 1;
`
export const DesktopToggler = styled.div`
display: none;
@media (min-width: ${({ theme }) => theme.device.l}) {
display: flex;
flex-direction: row;
align-items: center;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
}
`

export const TogglerBurgerBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
button {
  a {
    @media (max-width: ${({ theme }) => theme.device.s}) {
      font-size: 10px !important;
    }
  } 
}

@media (min-width: ${({ theme }) => theme.device.l}) {
  display: none;
}
`

export const ScrollLinkUl = styled(Scrollspy)`

/* button {
  transition: ${({ theme }) => theme.transitions.primary}; 
}


.current button::before {
  position: absolute;
  content: '';
  width: 100%;
  top: 50%;
  left: 50%;
  height: 10px;
  transform: translate(-50%, 1rem);
  color: brown;
  transition: ${({ theme }) => theme.transitions.primary}; 
  background: ${({ theme }) => theme.colors.primary}; 
}
 */
.current button{
  color: ${({ theme }) => theme.colors.primaryLight} !important;
  transition: ${({ theme }) => theme.transitions.primary}; 

}

li::before{
  width: 100%;
}


@media (min-width: ${({ theme }) => theme.device.xl}){
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  grid-gap: 1rem;
  height: 100%;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
 
}

`

export const MenuIconContainer = styled.div`

display: flex;
justify-content: flex-end;
align-items: center;
@media (min-width: ${({ theme }) => theme.device.l}) {
  display: none;
}
`

export const MenuIcon = styled.button`
cursor: pointer;
background: transparent;
border: none;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 2rem;
margin-left: 20px;
/*   margin-right: 20px;
margin-top: 20px; */
outline: thin-dotted;
z-index: 11;

&:focus{
  outline: none;
}

&:active{
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: ${({ menuOpen, theme }) => (menuOpen ? theme.colors.primaryLight : theme.colors.secondary)};
  border-radius: 10px;
  transform-origin: 1px;
  transition: opacity 300ms, transform 300ms;

  :first-child {
    transform: ${({ menuOpen }) =>
  menuOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  :nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    transform: ${({ menuOpen }) =>
  menuOpen ? "translateX(-20px)" : "translateX(0)"};
  }

  :nth-child(3) {
    transform: ${({ menuOpen }) =>
  menuOpen ? "rotate(-45deg)" : "rotate(0)"};
  }
}
`


/* Destkop */

export const StyledHeader = styled.header`

@media (max-width: ${({ theme }) => theme.device.l}) {
  display: block;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
overflow: hidden;


background-color: ${({ theme }) => theme.colors.third};
z-index: 1000;
height: 60px;
width: calc(100% - 6px);
padding: 0 3px;
transition: 300ms;
margin: 0;

height: ${({ menuOpen, height, items, boxHeight }) => (menuOpen ? 70+(items+1)*height+'px': '60px')};

ul {
  width: 100%;
  overflow: hidden;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  li {
    list-style: none;

    button {
      font-size: 20px;
    }

    a {
      width: 100vw;
      text-align: center;
      font-size: 16px;
      display: block;
      text-decoration: none;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: ${({ theme }) => theme.colors.primaryLight};
      font-weight: 700;
      text-transform: capitalize;
      cursor: pointer;
      transition: ${({ theme }) => theme.transitions.primary};
  
      &:hover {
        background: ${({ theme }) => theme.colors.secondaryLight};
        color: ${({ theme }) => theme.colors.primaryLight};
        padding: 0.5rem 1rem 0.5rem 1.3rem;
      }
    }

    
  }
} 
}
@media (min-width: ${({ theme }) => theme.device.l}) {
  display: unset;
  padding-top: unset;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  width: calc(100% - 6rem);
  padding: 0 3rem;
  transition: background 300ms;
  height: 7vh;
  background: ${({ theme }) => theme.colors.third};
 /*  background: ${({ background, theme }) => (background ? (theme.colors.primary) : "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%);")}; */

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
/*       color: ${({ background, theme }) => (background ? theme.colors.secondary : theme.colors.primary)}; */
      transition: filter 300ms;

        &:hover {
          filter: brightness(0.6);
      }
    }
  }
}
}
`

export const LogoBox = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
grid-gap: 10px;
text-transform: capitalize;
color: ${({ theme }) => theme.colors.secondary};
position: relative;




h3 {
  margin: 0;
  line-height: 0;
  @media (max-width: ${({ theme }) => theme.device.s}) {
    font-size: 14px;
  }

}




img, svg, div {
  height: 8vh;
  padding: 5px 0;
  @media (min-width: ${({ theme }) => theme.device.l}) {
    transform: translate(0px, 50%);
  }


}
`

export const StyledMobileLogo = styled(MobileLogo)`
padding-top: 10px;
padding-left: 20px;
padding-bottom: 10px;

height: 8vh;

@media (min-width: ${({ theme }) => theme.device.l}) {
  transform: translate(0, 2.5vh);
}


path{
  fill: ${({ theme }) => theme.colors.secondary};
}

path:first-child{
  fill: ${({ theme }) => theme.colors.third};
}

`

export const ToggleWrapper = styled.label`
position: absolute;
top: 28px;
right: 294px;
z-index: 3;
@media(max-width: 414px) {
  top: 15px;
  right: auto;
  left: 16px;
}
  .react-toggle {
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
  .react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
  .react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}
  .react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4D4D4D;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
  .react-toggle: hover: not(.react-toggle--disabled).react-toggle-track {
  background-color: #000000;
}
  .react-toggle--checked.react-toggle-track {
  background-color: #000000;
}
  .react-toggle--checked: hover: not(.react-toggle--disabled).react-toggle-track {
  background-color: #000000;
}
  .react-toggle-track-check {
  display: flex;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle--checked.react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle-track-x {
  display: flex;
  align-items: center;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
  .react-toggle--checked.react-toggle-track-x {
  opacity: 0;
}
  .react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50 %;
  background-color: #FAFAFA;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
  .react-toggle--checked.react-toggle-thumb {
  left: 27px;
  border-color: #4D4D4D;
}
  .react-toggle--focus.react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
  -moz-box-shadow: 0px 0px 3px 2px #0099E0;
  box-shadow: 0px 0px 2px 3px #0099E0;
}
  .react-toggle: active: not(.react-toggle--disabled).react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
  -moz-box-shadow: 0px 0px 5px 5px #0099E0;
  box-shadow: 0px 0px 5px 5px #0099E0;
}
`;