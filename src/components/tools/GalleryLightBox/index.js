import React from 'react'
import styled from 'styled-components'

import Gallery from 'customedLib/customed-gallery-lightbox/src'


export function GalleryLightBox({ images }) {

    const lightboxOptions = {
        imageLoadErrorMessage: 'Przepraszamy, wystąpił problem ze zdjęciem, proszę odświeżyć stronę',
        nextLabel: 'Następne zdjęcie',
        prevLabel: 'Poprzednie zdjęcie',
        zoomInLabel: 'Przybliż',
        zoomOutLabel: 'Oddal',
        closeLabel: 'Zamknij',
    }

    //Add callback to Lightbox onCloseRequest
    const onClose = () => {
        console.log('Galeria została zamknięta')
    }


    const CustomWrapper = ({ children, onClick }) => (
        <GalleryLightBoxContainer onClick={onClick} >
            {children}
        </GalleryLightBoxContainer>
    )

    return (
        <>
            <Gallery
                images={images}
                lightboxOptions={lightboxOptions}
                onClose={onClose}
                rowMargin="0"
                colWidth={100}
                mdColWidth={100}
                customWrapper={CustomWrapper}

            />

        </>
    )
}



const GalleryLightBoxContainer = styled.div`
      width: 50px;
      cursor: pointer;
      margin: 0;
      transition: 1s;
      &:hover {
        filter: brightness(1.25);
      }
      @media (min-width: 960px) {
        width: 50px;
        margin: 0;
      }

      
`