import React, { useState } from 'react'
import { ModalContainer, ModalBox, CloseIcon, OpenIcon, ModalGatsbyImage, ModalImageBox } from "./styles"

export const ModalImage = ({ currentImg, alt }) => {

    const [showModal, setShowModal] = useState(false)


    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <ModalContainer>
            <OpenIcon onClick={handleOpenModal} />
            <ModalBox
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(255,255,255,.8)',
                        cursor: 'pointer',
                        transition: '2s',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        /*                         padding: '20px', */
                    }
                }}
            >
                <ModalImageBox>
                    <ModalGatsbyImage image={currentImg} alt={alt} />
                    <CloseIcon onClick={handleCloseModal} />
                </ModalImageBox>

            </ModalBox>
        </ModalContainer>
    )
}

