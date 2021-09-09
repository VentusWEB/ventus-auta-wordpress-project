import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";

export const ModalBtn = styled.button`
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

export const ModalGatsbyImage = styled(GatsbyImage)`
max-height: 80vh;
max-width: 100vw;
margin: auto;


`
export const ModalBox = styled.div`
    position: relative;
    display: grid;
    max-height: 80vh;
    height: 100%;
    overflow: hidden;


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