import styled from 'styled-components';

export const PropCardContainer = styled.div`
    width: 50px;
    height: 80px;

    @media (min-width: ${({ theme }) => theme.device.l}) {
      width: 55px;
      height: 80px;
    }

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      width: 5vw;
      height: 8vw;
    }

    ${({ center }) =>
    center &&
    `
      margin: auto;
      `}


      ${({ secondary, theme }) =>
    secondary &&
    `
      width: 90px;
      height: 130px;

  
      @media (min-width: ${theme.device.s}) {
          width: 150px;
          height: 200px;
        }
        
        @media (min-width: ${theme.device.m}) {
          width: 70px;
          height: 100px;
        }`}

        ${({ third, theme }) =>
    third &&
    `
        display: flex;
        flex-direction: column-reverse;
        width: 80px;
        height: 120px;
    
        @media (min-width: ${theme.device.s}) {
          width: 13vw;
          height: 15vw;
          }`}

    ${({ fourth, theme }) =>
    fourth &&
    `
        display: flex;
        flex-direction: column-reverse;
        width: 80px;
        height: 120px;
    
        @media (min-width: ${theme.device.s}) {
          width: 13vw;
          height: 15vw;
          }`}
`
export const PropCardBox = styled.div`

        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color:  ${({ theme }) => theme.colors.secondary};
        fill:  ${({ theme }) => theme.colors.secondary};
        background:  ${({ theme }) => theme.colors.third};

        svg{
          width: 80%;
          max-height: 80%;
        }

        ${({ secondary, theme }) =>
    secondary &&
    `
        width: 100%;
        height: 75%;
        font-size: 50px;
        color:  ${theme.colors.third};
        fill:  ${theme.colors.third};
        background:  ${theme.colors.secondary};

        @media (min-width: ${theme.device.s}) {
            font-size: 120px;
          }
        `}
  
        ${({ third, theme }) =>
    third &&
    `
        width: 100%;
        height: 80%;
        font-size: 50px;
        color:  ${theme.colors.secondary};
        fill:  ${theme.colors.secondary};
        background:  ${theme.colors.third};
        

        @media (min-width: ${theme.device.s}) {
            font-size: 120px;
          }
        `}

        ${({ fourth, theme }) =>
    fourth &&
    `
            width: 100%;
            height: 80%;
            font-size: 50px;
            color:  ${theme.colors.third};
            fill:  ${theme.colors.third};
            background:  ${theme.colors.secondary};
            
    
            @media (min-width: ${theme.device.s}) {
                font-size: 120px;
              }
            `}
`

export const PropCardInfo = styled.div`

            width: 100%;
            height: 30%;
            font-size: 8px;
            font-weight: bold;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${({ theme }) => theme.colors.primary}; 
            color:  ${({ theme }) => theme.colors.secondary};
            text-transform: uppercase;

            @media (min-width: ${({ theme }) => theme.device.l}) {
              font-size: clamp(0.4rem,1vmax,.6rem)
            }

            @media (min-width: ${({ theme }) => theme.device.xxl}) {
              font-size: clamp(0.75rem,1.5vmax,.95rem);
            }


            ${({ secondary, theme }) =>
    secondary &&
    `
            width: 100%;
            height: 25%;
            font-size: 8px;
            background: ${theme.colors.primaryLight}; 
            color:  ${theme.colors.third};

            @media (min-width: ${theme.device.s}) {
              font-size: 12px;
            }


            `

  }
      
            ${({ third, theme }) =>
    third &&
    `
                    width: 100%;
                    height: 20%;
                    background: ${theme.colors.secondary}; 
                    color:  ${theme.colors.third};

                    @media (min-width: ${theme.device.s}) {
                      font-size: 12px;
                    }
                    @media (min-width: ${theme.device.m}) {
                      clamp(1rem,1.2vmax,1.3rem);
                    }
                    @media (min-width: ${theme.device.xxl}) {
                      font-size: clamp(1.125rem, 2vmax, 1.5rem);
                    }

                    em {
                      color: red;
                    }
                    `}

          ${({ fourth, theme }) =>
    fourth &&
    `
                  width: 100%;
                  height: 20%;
                  background: ${theme.colors.third}; 
                  color:  ${theme.colors.secondary};

                  @media (min-width: ${theme.device.s}) {
                    font-size: 12px;
                  }
                  @media (min-width: ${theme.device.m}) {
                    clamp(1rem,1.2vmax,1.3rem);
                  }
                  @media (min-width: ${theme.device.xxl}) {
                    font-size: clamp(1.125rem, 2vmax, 1.5rem);
                  }
                  `}

    

`