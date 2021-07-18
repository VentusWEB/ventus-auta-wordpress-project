import styled from 'styled-components';
import { ContentBox } from 'components/common'
import { ReactComponent as Map } from 'assets/illustrations/ventus-trade-location.svg'

export const FeaturesBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${({ theme }) => theme.device.l}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1.5fr;
  }
`

export const AboutIconsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.device.m}) {
    padding: 0 10px;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "first first . . . ."
      "first first second second . ."
      ". . second second third third"
      ". . . . third third"; 

      .first { grid-area: first; }

      .second { grid-area: second; }

      .third { grid-area: third; }
  }
`

export const LocationContentBox = styled(ContentBox)`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  justify-content: center;
/*   @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    justify-content: center;
  } */

`

export const AdressSection = styled.section`

`

export const AdressBox = styled.div`
  h3{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 22px;
  }

`

export const MapLocation = styled(Map)`
  fill: ${({ theme }) => theme.colors.third};
  width: 200px;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: 300px;
  } 
`


export const LocationContainer = styled.div`
display: grid;
grid-template-columns: 1fr;

@media (min-width: ${({ theme }) => theme.device.m}) {
  grid-template-columns: 1fr 1.5fr;
  align-items: stretch;
  justify-content: center;
} 
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

