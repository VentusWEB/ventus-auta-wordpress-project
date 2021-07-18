import styled from 'styled-components';

import { DefaultWrapper, MainWrapper } from 'components/common'

export const OfferContentBox = styled.div`
  padding: 2rem;
  line-height: 2rem;
`

export const OffersWrapper = styled(DefaultWrapper)`

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    height: 600px;
  }
  `


export const Wrapper = styled(MainWrapper)`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: .4fr 1fr;
      grid-gap: 0;

    }

`;

export const ProductsSectionWrapper = styled(DefaultWrapper)`
    position: relative;
    border-color: ${({ theme }) => theme.colors.secondary};
`

export const ProductsWrapper = styled.div`

    display: grid;
    background: ${({ theme }) => theme.colors.third};
    justify-content: center;
    grid-gap: 50px;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }



    @media (min-width: ${({ theme }) => theme.device.m}) {
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
      height: 440px;
      overflow-y: scroll;
      
    }

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      display: flex;
    }
`

