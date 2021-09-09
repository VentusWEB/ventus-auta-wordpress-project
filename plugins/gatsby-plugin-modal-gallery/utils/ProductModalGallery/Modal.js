import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { ModalContainer, ModalBox, CloseIcon, OpenIcon,  ModalImageBox, ControlersBox, CounterBox, Controler, ModalGatsbyImage } from "./styles"

export const Modal = ({ 
    currentImg, 
    currentImgAlt, 
    handlePrev, 
    handleNext, 
    handleKeyUp, 
    galleryLength,
    styles, 
    currentPhoto, 
    showModal, 
    handleOpenModal, 
    handleCloseModal, 
    handleTouchStart, 
    handleTouchMove
 }) => {



    return (
        <ModalContainer>
            <OpenIcon onClick={handleOpenModal} styles={styles} />
            <ModalBox
                preventScroll={true}
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
                <ModalImageBox 
                onTouchStart={handleTouchStart} 
                onTouchMove={handleTouchMove} 
                styles={styles}
                >
                    <ModalGatsbyImage image={currentImg} alt={currentImgAlt} />
                    <CloseIcon onClick={handleCloseModal} />
                    <CounterBox><span>{currentPhoto} / {galleryLength}</span></CounterBox>
                    <ControlersBox onKeyUp={e => handleKeyUp(e)}>
                        <Controler onClick={handlePrev} styles={styles} />
                        <Controler onClick={handleNext} styles={styles }/>
                    </ControlersBox>
                </ModalImageBox>

            </ModalBox>
        </ModalContainer>
    )
}

