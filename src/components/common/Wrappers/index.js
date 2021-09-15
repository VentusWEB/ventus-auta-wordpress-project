import styled from 'styled-components'

export const PaddingWrapper = styled.section`
    padding: 1rem;

    @media (min-width: ${({ theme }) => theme.device.m}) {
      padding: 1rem 2rem;
      
    }
`

export const DefaultWrapper = styled.div`
  border: solid 1rem ${({ theme }) => theme.colors.primary};

  ${({ secondary, theme }) =>
    secondary &&
    `         border-color:  ${theme.colors.secondary};

            `}

            ${({ third, theme }) =>
    third &&
    `         border-color:  ${theme.colors.third};
        
                    `}

                    ${({ fluid }) =>
    fluid &&
    `        /*  height: 100%; */
                        
                                    `}
`

export const MainWrapper = styled.section`
/*     padding: 1rem;
    
    @media (min-width: ${({ theme }) => theme.device.xl}) {
      padding: 0;
      
    } */

`;


export const ReverseWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
`
