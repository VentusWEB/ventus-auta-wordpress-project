
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import ReactModal from "react-modal"

import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";

export const ModalImageBox = styled.div`
    position: relative;
    display: grid;
    max-height: 100vh;
    width: 100%;

`

export const ModalGatsbyImage = styled(GatsbyImage)`
/*     max-height: 90%;
    width: auto; */
`


export const ModalContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`
export const ModalBox = styled(ReactModal)`
    transition: 2s;
    display: flex;
    position: relative;
/*     height: 100vh;
    width: 100%; */
`

export const CloseIcon = styled(AiFillCloseCircle)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);

    color: ${({ theme }) => theme.controls.color};
    font-size: ${({ theme }) => theme.controls.fontSizeSmall};
    transition: ${({ theme }) => theme.controls.transition};
    opacity: ${({ theme }) => theme.controls.opacity};
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.controls.hoverColor};
        opacity: ${({ theme }) => theme.controls.hoverOpacity};
    }

    @media (min-width: ${({ theme }) => theme.device.m}) {
        font-size: ${({ theme }) => theme.controls.fontSize};
    }
`

export const OpenIcon = styled(FaSearchPlus)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);
    z-index: 5;

    color: ${({ theme }) => theme.controls.color};
    font-size: ${({ theme }) => theme.controls.fontSizeSmall};
    transition: ${({ theme }) => theme.controls.transition};
    opacity: ${({ theme }) => theme.controls.opacity};
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.controls.hoverColor};
        opacity: ${({ theme }) => theme.controls.hoverOpacity};
    }

    @media (min-width: ${({ theme }) => theme.device.m}) {
        font-size: ${({ theme }) => theme.controls.fontSize};
    }

`