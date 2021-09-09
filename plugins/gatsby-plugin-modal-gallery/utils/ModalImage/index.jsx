import React, { useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { ModalContainer, ModalBox, CloseIcon, OpenIcon, ModalImageBox, ModalImageWrapper, ModalGatsbyImage } from "./styles"

export const ModalImage = ({ image, alt, styles }) => {

    const [showModal, setShowModal] = useState(false)


    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
<ModalImageWrapper styles={styles}>
        <ModalContainer styles={styles}>
        <OpenIcon onClick={handleOpenModal} styles={styles} />
            <ModalBox
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
                styles={styles}
                style={{
                    overlay: {
                        backgroundColor: styles.overlay.backgroundColor,
                        cursor: styles.overlay.cursor,
                        transition: styles.overlay.transition,
                        zIndex: styles.overlay.zIndex,
                        display: styles.overlay.display,
                        justifyContent: styles.overlay.justifyContent,
                        alignItems: styles.overlay.alignItems,
                    }
                }}
            >
                <ModalImageBox styles={styles}>
                <GatsbyImage image={image} alt={alt} />

                <CloseIcon onClick={handleCloseModal} styles={styles}/>
                </ModalImageBox>

            </ModalBox>
        </ModalContainer>
        <ModalGatsbyImage image={image} alt={alt} styles={styles} />
        </ModalImageWrapper>

    )
}

