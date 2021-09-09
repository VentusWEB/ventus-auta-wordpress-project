
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import ReactModal from "react-modal"

import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";

export const ModalImageBox = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    max-height: ${({ styles }) => styles.maxModalImgHeight ? styles.maxModalImgHeight : "80vh" };
    min-height: ${({ styles }) => styles.minModalImgHeight ? styles.minModalImgHeight : "70vh" };
    max-width: ${({ styles }) => styles.maxModalImgWidth ? styles.maxModalImgWidth : "90vw" };

`

export const ModalContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`
export const ModalBox = styled(ReactModal)`
    transition: ${({ styles }) => styles.transition ? styles.transition : "1s" }; 
    display: flex;
    position: relative;
    overflow: hidden;
`

export const CloseIcon = styled(AiFillCloseCircle)`
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


export const CounterBox = styled.div`
    background: rgba(255,255,255,.8);
    position: absolute;
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content: flex-end;
    height: 5%;
    align-items: center;

    span {
        margin: 0 20px;
        font-wegith: bold;
        color: black;
    }

`

export const ControlersBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: space-between;

    .photos-end{
        opacity: 0;
    }
`


export const Controler = styled(IoIosArrowDropleftCircle)`
    margin: 0 10px;

    color: ${({ styles }) => styles.controlsColor ? styles.controlsColor : "white" };
    font-size: ${({ styles }) => styles.controlsSize ? styles.controlsSize : "50px" };
    transition: ${({ styles}) => styles.transition ? styles.transition : "2s" }; 
    opacity: ${({ styles }) => styles.controlsOpacity ? styles.controlsOpacity : ".4" }; 
    cursor: pointer;

    &:hover{
        color: ${({ styles }) => styles.controlsColorHover ? styles.controlsColorHover : "black" }; 
        opacity: ${({ styles }) => styles.controlsOpacityHover ? styles.controlsOpacityHover : ".5" }; 
    }

    @media (min-width: ${({ styles }) => styles.mediaWidth ? styles.mediaWidth : "786px" }) {
        font-size: ${({ styles }) => styles.controlsSizeBig ? styles.controlsSizeBig : "50px" }; 
    }

    &:last-child{
        transform: rotate(180deg);
    }

`


export const ModalBtn = styled.button`
`

/* export const CounterBox = styled.div`
    background: rgba(255,255,255,.8);
    position: absolute;
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content: flex-end;
    height: 5%;
    align-items: center;

    span {
        margin: 0 20px;
        font-wegith: bold;
        color: black;
    }

` */
/* export const Controler = styled(IoIosArrowDropleftCircle)`
margin: 0 10px;

color: ${({ styles }) => styles.controlsColor ? styles.controlsColor : "white" };
font-size: ${({ styles }) => styles.controlsSize ? styles.controlsSize : "50px" };
transition: ${({ styles}) => styles.transition ? styles.transition : "2s" }; 
opacity: ${({ styles }) => styles.controlsOpacity ? styles.controlsOpacity : ".4" }; 
cursor: pointer;

&:hover{
    color: ${({ styles }) => styles.controlsColorHover ? styles.controlsColorHover : "black" }; 
    opacity: ${({ styles }) => styles.controlsOpacityHover ? styles.controlsOpacityHover : ".5" }; 
}

@media (min-width: ${({ styles }) => styles.mediaWidth ? styles.mediaWidth : "786px" }) {
    font-size: ${({ styles }) => styles.controlsSizeBig ? styles.controlsSizeBig : "50px" }; 
}

&:last-child{
    transform: rotate(180deg);
}

` */

export const ModalGatsbyImage = styled(GatsbyImage)`
max-height: 100vh;
max-width: 100vw;
margin: auto;


`
export const SingleModalBox = styled.div`
    position: relative;
    display: grid;
    max-height: 95vh;
    height: 100%;
    overflow: hidden;


`

/* export const ControlersBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: space-between;

    .photos-end{
        opacity: 0;
    }
` */