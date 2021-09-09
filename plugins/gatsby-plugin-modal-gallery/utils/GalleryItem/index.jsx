import React from "react"
import { getImage } from "gatsby-plugin-image"

import { ModalGallery } from "../index"
import { ImageWrapper, GalleryImg } from "./styles"



export const GalleryItem = ({ image, index, photos, alt, styles }) => {

  const imageData = getImage(image)

  if (!imageData) return null
  return (
    <ImageWrapper styles={styles} >
      <ModalGallery styles={styles} currentImg={image} current={image} photos={photos} index={index} />
      <GalleryImg alt={alt || "Ventus Trade WEB"} image={imageData} styles={styles}/>

    </ImageWrapper>
  )
}

