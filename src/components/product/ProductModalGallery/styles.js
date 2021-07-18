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

    &:last-child{
        transform: rotate(180deg)
    }

`

export const ModalImage = styled(GatsbyImage)`


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