/* import React, { useState, useEffect, useContext } from 'react';
import { ControlersBox, Controler, ModalBox, CounterBox, ModalBtn } from './styles';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

 
import { ModalImage } from "interactions"

export const ProductModalGallery = ({ photos }) => {


    const [photo, setPhoto] = useState(0)


    const galleryLength = photos.length

    const handlePrev = () => {
        if (photo <= 0) {
        } else {
            setPhoto(currPhoto => currPhoto - 1)

        }
    }

    const handleNext = () => {
        if (photo === (galleryLength - 1)) {
        } else {
            setPhoto(currPhoto => currPhoto + 1)

        }
    }

    const handleKeyUp = e => {
        e.preventDefault()
        const { keyCode } = e
        if (keyCode === 37) {
            // Left Arrow Key
            if (photo <= 0) {
            } else {
                setPhoto(currPhoto => currPhoto - 1)

            }
        }
        if (keyCode === 39) {
            // Right Arrow Key
            if (photo === (galleryLength - 1)) {
            } else {
                setPhoto(currPhoto => currPhoto + 1)
            }
        }
    }


    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false)
        return () => window.removeEventListener('keyup', handleKeyUp, false)

    }, [])

    useEffect(() => {
    }, [photo])


    const [touchPosition, setTouchPosition] = useState(null)
    // ...
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            handleNext()
        }

        if (diff < -5) {
            handlePrev()
        }

        setTouchPosition(null)
    }

    const currentImg = getImage(photos[photo].image.childImageSharp.gatsbyImageData)
    const currentImgAlt = photos[photo].image.name

    return (
        <ModalBox onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
            <ModalImage currentImg={currentImg} alt={currentImgAlt} />
            <GatsbyImage image={currentImg} alt={currentImgAlt} />
            <CounterBox><span>{photo + 1} / {galleryLength}</span></CounterBox>
            <ControlersBox onKeyUp={e => handleKeyUp(e)}>
                <Controler onClick={handlePrev} className={photo + 1 === 1 ? "photos-end" : ""}>
                </Controler>
                <Controler onClick={handleNext} className={photo + 1 === galleryLength ? "photos-end" : ""}>
                </Controler>
            </ControlersBox>
        </ModalBox>
    );
};
 */