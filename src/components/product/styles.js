import styled from 'styled-components';
import { ContentBox } from "components/common"


/* Modal */

export const ModalGalleryBox = styled.div`

`

export const ModalInfoBox = styled.div`
@media (min-width: ${({ theme }) => theme.device.l}){
  overflow-y: scroll;

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
}

`

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 5rem 0;

  @media (min-width: ${({ theme }) => theme.device.l}) {
    grid-template-columns: 1fr .4fr;
    height: 80vh;
  }
`

export const GridInfoBox = styled.div`
`

export const SmallWidth = styled.div`
  width: 90%;
  margin: auto;  
`

export const GridBoxDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;

`

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: 1fr 2fr;
      width: 90%;
      margin: auto;
    }

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      grid-template-columns: 1fr;

    }
`

export const GridContentBox = styled(ContentBox)`
    display: grid;
    grid-template-columns: 1fr;

    span{
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }

    p{
      display: grid;
      grid-template-columns: 1fr 1fr;



      ${({ secondary, theme }) =>
        secondary &&
        `

      grid-template-columns: 1fr;
      position: relative;
      text-transform: uppercase;


      &:after{
        content: "✓";
        position: absolute;
        color: green;
        font-weight: bold;
        font-size: 40px;
        right: 0;
      }

      span{
        font-weight: bold;
        color: ${theme.colors.primaryLight};
      }

    `}

    }

    li{
      list-style: none;
    }


`

export const ParametersBox = styled(ContentBox)`
    display: flex;
    flex-flow: wrap;
    grid-gap: 10px;
    background: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.secondary};

      h1 {
        width: 100%;
      }
`

export const VinBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    margin: 20px auto;

    span{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        font-weight: bold;
    }
`
export const ProductDetailsWrapper = styled.div`
    width: 100%;
    margin: 10px auto;

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
    }

`