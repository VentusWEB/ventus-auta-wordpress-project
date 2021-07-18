import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/illustrations/vt-logo.svg'

import { DefaultWrapper } from 'components/common'

export const Wrapper = styled.section`
`

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

  @media (min-width: ${({ theme }) => theme.device.m}) {
    display: none;
  }
`

export const ContactSectionWrapper = styled.section`
  display: grid;
  gird-template-columns: 1fr;
/*   height: 100%; */

/*   @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1.3fr 1fr;
  } */

`
export const ToggleableBg = styled(Logo)`
  fill: ${({ theme }) => theme.colors.secondaryLight};
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
`

export const ContactSectionsBox = styled.div`
  
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.third};  
  padding: ${({ theme }) => theme.padding.m}; 
  line-height: 2em;
  position: relative;
  width: 90%;
  margin: auto;



  h5{
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
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

