import React, { useState, useEffect } from 'react';
import { ControlersBox, Controler, SingleModalBox, CounterBox, ModalGatsbyImage } from './styles';
import { getImage } from "gatsby-plugin-image"

import { Modal } from "./Modal"

/* Modal */

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

    const currentImg = getImage(photos[photo][0].gatsbyImageData)
    const currentImgAlt = photos[photo][1]

    const currentPhoto = photo + 1

    return (
        <div css={`min-height: 50vh;`}>
        <SingleModalBox   
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        >

            <Modal 
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleNext={handleNext} 
            handlePrev={handlePrev} 
            handleKeyUp={handleKeyUp} 
            showModal={showModal} 
            handleOpenModal={handleOpenModal} 
            handleCloseModal={handleCloseModal} 
            styles={styles} 
            currentImg={currentImg} 
            current={currentImg} 
            galleryLength={galleryLength} 
            currentPhoto={currentPhoto} 
            currentImg={currentImg}
            currentImgAlt={currentImgAlt}
             />

            <ModalGatsbyImage image={currentImg} alt={currentImgAlt} />
            <CounterBox><span>{currentPhoto} / {galleryLength}</span></CounterBox>
            <ControlersBox onKeyUp={e => handleKeyUp(e)}>
                <Controler onClick={handlePrev} className={currentPhoto === 1 ? "photos-end" : ""} styles={styles}>
                </Controler>
                <Controler onClick={handleNext} className={currentPhoto === galleryLength ? "photos-end" : "" } styles={styles}>
                </Controler>
            </ControlersBox>
        </SingleModalBox>
        </div>
    );
};
