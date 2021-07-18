import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ProductPhotosContainer, ProductMainImage } from './styles';
import { GalleryLightBox } from "components/tools"
import { getImage } from 'gatsby-plugin-image'

export const ProductPhotosBox = ({ images, mainImage }) => {
  const { theme } = useContext(ThemeContext);

  const image = getImage(mainImage)

  return (
    <ProductPhotosContainer>
      <ProductMainImage image={image} />
      <GalleryLightBox images={images} />
    </ProductPhotosContainer>
  );
};
