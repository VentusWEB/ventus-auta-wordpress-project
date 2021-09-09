
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import ReactModal from "react-modal"

import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";

 
export const ModalImageWrapper = styled.div`
    position: relative;
    background: ${({ styles }) => styles.background ? styles.background : "transparent"};
    display: flex;
    border-radius: ${({ styles }) => styles.borderRadius ? styles.borderRadius : "10px"};
    opacity: .8;
    transition: ${({ styles }) => styles.transition ? styles.transition : "2s"};
    margin: auto;

    &:hover{
        opacity: 1;
    }

    width: ${({ styles }) => styles.imgWidth ? styles.imgWidth : "150px" }; 
    height: ${({ styles }) => styles.imgHeight ? styles.imgHeight : "150px" }; 
`
export const ModalImageBox = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    max-height: ${({ styles }) => styles.maxModalImgHeight ? styles.maxModalImgHeight : "80vh" };
    min-height: ${({ styles }) => styles.maxModalImgHeight ? styles.maxModalImgHeight : "50vh" }
    max-width: ${({ styles }) => styles.maxModalImgWidth ? styles.maxModalImgWidth : "90vw" };

`

export const ModalContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`
export const ModalBox = styled(ReactModal)`
    transition: ${({ styles }) => styles.transition ? styles.transition : "2s" }; 
    display: flex;
    position: relative;
`

export const CloseIcon = styled(AiFillCloseCircle )`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);

    color: white;
    font-size: 30px;
    transition: 1s;
    opacity:.8;
    cursor: pointer;

    &:hover{
        color: black;
        opacity: .7;
    }

    @media (min-width:768px) {
        font-size: 50px;
    }


`

export const OpenIcon = styled(FaSearchPlus)`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    color: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;

    @media (min-width: ${({ styles }) => styles.mediaWidth ? styles.mediaWidth : "786px" }){
        width: unset;
        height: unset;
        color: white;
        transform: translate(-20px, 20px);
        font-size: 30px;
        transition: 1s;
        opacity:.8;
        font-size: 50px;

        &:hover{
            color: black;
            opacity: .7;
        }
    }

`

export const ModalGatsbyImage = styled(GatsbyImage)`
    width: ${({ styles }) => styles.imgWidth ? styles.imgWidth : "150px" }; 
    height: ${({ styles }) => styles.imgHeight ? styles.imgHeight : "150px" }; 
    border-radius: ${({ styles }) => styles.borderRadius ? styles.borderRadius : "10px"};
`
