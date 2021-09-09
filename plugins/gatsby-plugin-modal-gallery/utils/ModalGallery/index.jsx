import React, { useState, useEffect } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { ModalContainer, ModalBox, CloseIcon, OpenIcon,  ModalImageBox, ControlersBox, CounterBox, Controler } from "./styles"
import { getImage } from "gatsby-plugin-image"

export const ModalGallery = ({ handleKeyUp, photos, index, styles, changePhoto,setPhoto, photo, showModal, handleOpenModal, handleCloseModal    }) => {


/*     const [photo, setPhoto] = useState(index) */


    const galleryLength = photos.length

    const handlePrev = () => {
        if (photo <= 0) {
        } else {
            setPhoto(currPhoto => currPhoto - 1)
            /* changePhoto(currPhoto => currPhoto - 1) */

        }
    }

    const handleNext = () => {
        if (photo === (galleryLength - 1)) {
        } else {
            setPhoto(currPhoto => currPhoto + 1)
            /* changePhoto(currPhoto => currPhoto + 1) */

        }
    }

/*     const handleKeyUp = e => {
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
    } */


/*     useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false)
        return () => window.removeEventListener('keyup', handleKeyUp, false)

    })

    useEffect(() => {
    }, [photo])
 */

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

    return (
        <ModalContainer>
            <OpenIcon onClick={handleOpenModal} styles={styles} />
            <ModalBox
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
                styles={styles}
                style={{
                    overlay: {
                        backgroundColor: styles.overlay.backgroundColor ? styles.overlay.backgroundColor : "rgba(255,255,255.0)",
                        cursor: styles.overlay.cursor ? styles.overlay.cursor : "pointer",
                        transition: styles.overlay.transition ? styles.overlay.transition : "2s",
                        zIndex: styles.overlay.zIndex ? styles.overlay.zIndex : 10000,
                        display: styles.overlay.display ? styles.overlay.display : "flex",
                        justifyContent: styles.overlay.justifyContent ? styles.overlay.justifyContent : "center",
                        alignItems: styles.overlay.alignItems ? styles.overlay.alignItems : "center",
                    }
                }}
            >
                <ModalImageBox onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} styles={styles}>
                    <GatsbyImage image={currentImg} alt={currentImgAlt} />
                    <CloseIcon onClick={handleCloseModal} />
                    <CounterBox><span>{photo + 1} / {galleryLength}</span></CounterBox>
                    <ControlersBox onKeyUp={e => handleKeyUp(e)}>
                        <Controler onClick={handlePrev} styles={styles} />
                        <Controler onClick={handleNext} styles={styles }/>
                    </ControlersBox>
                </ModalImageBox>

            </ModalBox>
        </ModalContainer>
    )
}

