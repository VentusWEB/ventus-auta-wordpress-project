import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"




/* Archive Page */

export const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const GalleryWrapper = styled.section`
    background: ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.border.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem auto;
    width: 100%;

`