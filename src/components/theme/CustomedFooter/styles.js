import styled from 'styled-components'
import { Link } from "gatsby"
import { ReactComponent as Logo } from "assets/svgs/vt-logo.svg";

/* Footer Header */

export const FooterHeader = styled.section`
  height: 30px;
  background: ${({ theme }) => theme.colors.third};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryLight};

  /*   filter: brightness(65%); */
`
/* Logo */

export const FooterBrandLogo = styled(Logo)`
  width: 50px;
  height: 100%;
  margin: 0 20px;
  fill: ${({ theme }) => theme.colors.secondary};
`

export const FooterLogoLink = styled(Link)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};
  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

`

export const FooterInfoBox = styled.section`
display: flex;
flex-direction: column;
font-size: ${({ theme }) => theme.fontSize.s};
justify-content: center;
align-items: center;
padding: 0.3em 0;
width: 100%;
border-top: 2px solid ${({ theme }) => theme.colors.primaryLight};

@media (min-width: ${({ theme }) => theme.device.m}){
  flex-direction: row;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.m};

}



`
export const GridBox = styled.div`
display: grid;

p{
    text-align: center;
    font-style: italic;
    justify-self: baseline;
}
`
export const FooterLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const FooterSection = styled.section`
font-size: ${({ theme }) => theme.fontSize.m};
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;

@media (min-width: ${({ theme }) => theme.device.m}){
  flex-direction: row;
}
`

export const FooterWrapper = styled.footer`

display: flex;
flex-direction: column;
background: ${({ theme }) => theme.colors.third};

`
/* Footer Icons */
export const FooterIconsBox = styled.div`
  display: flex;
  flex-direction: row;
`
export const FooterIcon = styled.a`
color: ${({ theme }) => theme.colors.footerIcon}; 
font-size: ${({ theme }) => theme.fontSize.m}; 
transition: ${({ theme }) => theme.transitions.transDefault}; 
margin: 10px;
display: flex;
padding: 10px;
border-radius: 50px;
background: ${({ theme }) => theme.colors.primaryLight};
transition: 0.3s ease-in;
color: ${({ theme }) => theme.colors.third};

&:hover{
  color: ${({ theme }) => theme.colors.primaryLight};
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transform: scale(1.5);

}

`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryLight}; 
  text-decoration: none;
  margin: 0 10px;
  transition: ${({ theme }) => theme.transitions.primaryLight}; 
  padding: 10px 0;
  display: flex;
  grid-gap: 10px;
  align-items: center;
  &:hover{
    color: ${({ theme }) => theme.colors.secondary}; 
  }
`

export const FooterInfo = styled(Link)`
color: ${({ theme }) => theme.colors.primaryLight}; 
font-size: 10px; 
text-decoration: none;
margin: .3em;
transition: ${({ theme }) => theme.transitions.primaryLight}; 
@media (min-width: ${({ theme }) => theme.device.m}){
  font-size: ${({ theme }) => theme.fontSize.xs}; 
}
&:hover{
  color: ${({ theme }) => theme.colors.secondary};
  /* filter: brightness(0.6); */
}

&::before {
  content: "|   ";
  color: ${({ theme }) => theme.colors.primaryLight}; 
}

@media (min-width: ${({ theme }) => theme.device.m}){
  font-size: ${({ theme }) => theme.fontSize.s};
}
`