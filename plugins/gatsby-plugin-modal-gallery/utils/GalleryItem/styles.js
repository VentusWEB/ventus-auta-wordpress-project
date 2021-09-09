import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImageWrapper = styled.div`
    position: relative;
    background: ${({ styles }) => styles.background ? styles.background : "transparent"};
    display: flex;
    border-radius: ${({ styles }) => styles.borderRadius ? styles.borderRadius : "10px"};
    opacity: .8;
    transition: ${({ styles }) => styles.transition ? styles.transition : "2s"};
    margin: auto;

    &:hover{
        opacity: 1;
    }

    width: ${({ styles }) => styles.imgWidth ? styles.imgWidth : "150px" }; 
    height: ${({ styles }) => styles.imgHeight ? styles.imgHeight : "150px" }; 
`

export const GalleryImg = styled(GatsbyImage)`
    width: ${({ styles }) => styles.imgWidth ? styles.imgWidth : "150px" }; 
    height: ${({ styles }) => styles.imgHeight ? styles.imgHeight : "150px" }; 
    border-radius: ${({ styles }) => styles.borderRadius ? styles.borderRadius : "10px"};
`


