import styled from 'styled-components';
import { ContentBox } from 'components/common'
import { ReactComponent as Map } from 'assets/illustrations/ventus-trade-location.svg'

export const LocationWrapper = styled.div`
  
`

export const LocationContentBox = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  justify-content: center;


  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1.5fr 1fr;
    align-items: start;
    justify-content: start;

    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
} 

`

export const AdressSection = styled.section`

@media (min-width: ${({ theme }) => theme.device.s}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
} 
`

export const AdressBox = styled.div`
  line-height: 0.5em;
  h3{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.device.m}) {
    line-height: 0.6em;
  } 

`

export const MapLocation = styled(Map)`
  fill: ${({ theme }) => theme.colors.secondary};
  width: 200px;
  height: auto;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: 80%;
    height: auto;
  } 
`


export const LocationContainer = styled.div`
display: flex;
flex-direction: column-reverse;
width: 90%;
margin: auto;

@media (min-width: ${({ theme }) => theme.device.m}) {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: stretch;
  justify-content: center;
} 
`;

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.secondary};  

@media (min-width: ${({ theme }) => theme.device.xl}) {
  order: -1;

}
`;

