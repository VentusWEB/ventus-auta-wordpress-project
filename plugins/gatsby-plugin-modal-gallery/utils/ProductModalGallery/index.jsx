import React, { useState, useEffect } from 'react';
import { ControlersBox, Controler, ModalBox, CounterBox, ModalGatsbyImage } from './styles';
import { getImage } from "gatsby-plugin-image"

/* Modal */

import { ModalGallery } from "../index"

export const ProductModalGallery = ({ photos, styles }) => {

    /* OPEN MODAL AND CHANGE ITS STATE */

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }



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

    })

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

/*     const currentImg = getImage(photos[photo].image.childImageSharp.gatsbyImageData)
    const currentImgAlt = photos[photo].image.name */

    const currentImg = getImage(photos[photo][0].gatsbyImageData)
    const currentImgAlt = photos[photo][1]
    const currentIndex = photos[photo][2]

    return (
        <div /* css={`min-height: 50vh;`} */>
        <ModalBox   onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} touchPosition={touchPosition} setTouchPosition={setTouchPosition} >
            {/* <ModalImage image={currentImg} alt={currentImgAlt} styles={styles} /> */}
            <ModalGallery handleKeyUp={handleKeyUp} showModal={showModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} styles={styles} currentImg={currentImg} current={currentImg} photos={photos} setPhoto={setPhoto} photo={photo} changePhoto={setPhoto} index={currentIndex} />
            <ModalGatsbyImage image={currentImg} alt={currentImgAlt} />
            <CounterBox><span>{photo + 1} / {galleryLength}</span></CounterBox>
            <ControlersBox onKeyUp={e => handleKeyUp(e)}>
                <Controler onClick={handlePrev} className={photo + 1 === 1 ? "photos-end" : ""} styles={styles}>
                </Controler>
                <Controler onClick={handleNext} className={photo + 1 === galleryLength ? "photos-end" : "" } styles={styles}>
                </Controler>
            </ControlersBox>
        </ModalBox>
        </div>
    );
};
