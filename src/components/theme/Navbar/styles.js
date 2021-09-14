import styled from 'styled-components'

import Scrollspy from "react-scrollspy"

import { Link } from "gatsby"

export const BackLink = styled(Link)`
    background: ${({ theme }) => theme.colors.third};
    padding: 5px 10px;
    margin-left: 10px;
    border: 4px solid ${({ theme }) => theme.colors.primaryLight};
    position: relative;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.device.m}){
      &:before {
        content: 'powrót';
        color: ${({ theme }) => theme.colors.primaryLight};
      }
    }


  svg {

    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

export const ScrollLinkUl = styled(Scrollspy)`
 


.current::after {
  position: absolute;
  content: '';
  width: 100%;
  top: 50%;
  left: 50%;
  height: 10px;
  transform: translate(-50%, 2rem);

  background: ${({ theme }) => theme.colors.primaryLight}; 
}

.current{
  color: ${({ theme }) => theme.colors.primaryLight} !important;
  transition: ${({ theme }) => theme.transitions.primary}; 

}

li::after{
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


export const BrandLogoBox = styled.div`
div{
  height: 50px;
}
  svg{
    height: 50px;
  }
`
export const BrandIdentity = styled.div`
  display: flex;
  flex-direction: column;
 
`

export const BrandLink = styled(Link)`
  margin-left: 1rem; 
  color: ${({ theme }) => theme.colors.secondaryLight};
  display: flex;
  align-items: center;
  grid-gap: 1rem;

  h5{
    font-size: 8px;
    margin: 0;
    line-height: 1rem;
    font-style: italic;
  }
  h2{
    margin: 0;
    line-height: 1rem;
    font-size: 14px;
    margin-bottom: .4rem !important;
  }


  @media (min-width: ${({ theme }) => theme.device.s}) {
    h5{
      font-size: ${({ theme }) => theme.fontSize.navSloganBig};
    }
    h2{
      font-size: ${({ theme }) => theme.fontSize.navBrandNameBig};
    }
  } 

   @media (min-width: ${({ theme }) => theme.device.s}) {
    flex-direction: row-reverse;
  }  
`

export const MenuContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
`

export const TogglerBurgerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
`

export const MenuBar = styled.header`
  position: fixed;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  @media (min-width: ${({ theme }) => theme.device.m}){
    width: calc(100% - 4rem);
    padding: 0 2rem;
  }
  @media (min-width: ${({ theme }) => theme.device.xl}){
    width: calc(100% - 10rem);
    padding: 0 5rem;
  }
  
  transition: background 300ms;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primaryLight};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.device.xl}){
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
    background: ${({ menuOpen, theme }) => (menuOpen ? theme.nav.burgerOpen : theme.nav.burgerClose)};
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

export const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.colors.third};
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  transition: 300ms;
  width: ${({ menuOpen }) => (menuOpen ? "60vw" : 0)};
  border-left: ${({ menuOpen, theme }) => (menuOpen ? `4px solid ${theme.colors.primary}` : "")};

  @media (min-width: ${({ theme }) => theme.device.l}) {
    width: ${({ menuOpen }) => (menuOpen ? "40vw" : 0)};
  }  

  ul {
    width: 100%;
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    justify-content: space-evenly;
    padding: 2rem 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryLight};
    margin: 2rem 0;


    li {
      list-style: none;      
    
      

      button {

        width: 100vw;
        text-align: center;


        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        font-size: ${({ theme }) => theme.fontSize.m};
    
        &:hover {
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primaryLight};
          padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
      }

      
    }
  } 

  .current{
    button {
      color: ${({ theme }) => theme.colors.primaryLight} !important;
    }
  }
  
`
