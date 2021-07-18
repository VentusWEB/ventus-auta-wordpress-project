import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';


export const ProductPhotosContainer = styled.div`
  width: 300px;
  margin: auto;
  position: relative;
  margin-bottom: 100px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e78632;
    background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.3) 20%,transparent 20%,transparent 40%,rgba(255, 255, 255, 0.3) 40%,rgba(255,255,255,.3) 60%,transparent 60%,transparent 80%,rgba(255, 255, 255, 0.3) 80%);
    border-radius: 10px;
  }
`

export const ProductMainImage = styled(GatsbyImage)`
`
