import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'

export const IconBox = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    img {
        width: 80px;
        height: 80px;
    }

    section {
        background: rgba(0,0,0,.8);
        svg {
            width: 80px;
            height: 80px;
            fill: orangered;

            path {
                fill: orangered !important;
            }
        }
    }
`

export const ProductCardContainer = styled.div`
    width: 290px;
    height: 400px;
    position: relative;

    @media (min-width: ${({ theme }) => theme.device.m}) {
        margin: 20px;
        width: 320px;
    }
`
export const ProductCardIconsContainer = styled.div`
    width: 260px;
    height: 300px;
    background: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
/*     @media (min-width: ${({ theme }) => theme.device.m}) {
        width: 220px;
        height: 260px;
    } */
`

export const ProductCardPhoto = styled.div`
    width: 260px;
    height: 300px;
    position: absolute;
    top: 0;
/*     @media (min-width: ${({ theme }) => theme.device.m}) {
        width: 220px;
        height: 260px;
    } */
`
export const ProductCardIcons = styled.div`
    position: absolute:
    bottom: 0;
    left: 0;
    width: 270px;
    height: 380px;
    
`
export const ProductCardIconsBox = styled.div`
    height: 80px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
`

export const ProductIcon = styled.div`
    height: 100%;
    width: 50px;
`

export const ProductImg = styled(GatsbyImage)`
position: absolute;
height: 100%;
width: 100%;

`