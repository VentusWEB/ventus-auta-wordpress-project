import styled from 'styled-components';
import { ContentBox, DefaultWrapper, MainWrapper } from 'components/common'
import { ReactComponent as Map } from 'assets/illustrations/ventus-trade-location.svg'
import { ReactComponent as Logo } from 'assets/illustrations/vt-logo.svg'

export const ReverseBox = styled.div`
@media (min-width: ${({ theme }) => theme.device.xl}){
  display: flex;
  flex-direction: column-reverse;

}
`

export const GridMainWrapper = styled(MainWrapper)`
@media (min-width: ${({ theme }) => theme.device.xl}){
  display: grid;
  grid-template-columns: 1fr 1fr;
}

`

export const LocationWrapper = styled.div`
  
`

export const LocationContentBox = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;




  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1.5fr 1fr;
    align-items: start;
    justify-content: space-around;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
} 

`

export const AdressSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
@media (min-width: ${({ theme }) => theme.device.s}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
} 
`

export const AdressBox = styled.div`
  line-height: 0.5em;
  h3{
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.device.m}) {
    line-height: 0.6em;
  } 

`

export const MapLocation = styled.div`

img {
  width: 200px;
  height: auto;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: 80%;
    height: auto;
  } 
}

svg {
  fill: ${({ theme }) => theme.colors.secondary};
  width: 200px;
  height: auto;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: 80%;
    height: auto;
  } 
}

`


export const LocationContainer = styled.div`
display: flex;
flex-direction: column-reverse;
width: 100%;

@media (min-width: ${({ theme }) => theme.device.m}) {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: stretch;
  justify-content: center;
} 
`;


/* Contact */


export const GridContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr;
  }
`


export const ReverseWrapper = styled(DefaultWrapper)`
@media (min-width: ${({ theme }) => theme.device.m}) {
  display: flex;
  flex-direction: column-reverse;
}
`

export const ContactIconsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.third};
  @media (min-width: ${({ theme }) => theme.device.m}) {
    display: none;
  }
`

export const ContactSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;

`
export const ToggleableBg = styled(Logo)`
  fill: ${({ theme }) => theme.colors.secondaryLight};
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
`

export const ContactIcon = styled.div`
  
`

export const ContactSectionsBox = styled.div`
  
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.third};  
  line-height: 2em;
  position: relative;
  width: 100%;


  h5{
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 20px;
    position: relative;
  }

  a{
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
  }
`

export const ContactFormBox = styled.div`
  width: 90%;
  margin: 20px auto;
  

  @media (min-width: ${({ theme }) => theme.device.m}) {
    order: -1;
    padding-right: unset;
    width: 85%;
  }


`;


