import styled from 'styled-components';

export const PropIconContainer = styled.div`
    width: 50px;
    height: 80px;

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
        width: 5vw;
        height: 8vw;
      }

`
export const PropIconBox = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color:  ${({ theme }) => theme.colors.third};
    background:  ${({ theme }) => theme.colors.secondary};
`

export const PropIconInfo = styled.div`
    width: 100%;
    height: 25px;
    background: white;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.primary}; 
    color:  ${({ theme }) => theme.colors.secondary};

    @media (min-width: ${({ theme }) => theme.device.l}) {
        font-size: ${({ theme }) => theme.fontSize.s}; 
      }

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
        font-size: ${({ theme }) => theme.fontSize.s}; 
      }
`