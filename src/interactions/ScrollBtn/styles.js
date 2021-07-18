import styled, { keyframes } from 'styled-components'
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

const ShowScroll = keyframes`
from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`
export const ScrollButtonIcon = styled(IoIosArrowDropupCircle)`
`

export const ScrollButton = styled.button`
            z-index: 2;
            position: fixed;
            bottom: 0;
            right: 0;
            background-color: transparent;
            border: none;
            font-size: 50px;
            color: ${({ theme }) => theme.colors.scrollBtn};
            cursor: pointer;
            transition: 0.8s;
            animation: ${ShowScroll} .5s ease-in-out normal forwards;
            animation-iteration-count: 1;
            transition: ${({ theme }) => theme.transitions.primary};

        &:hover {
            transition: 0.5s;
            color: ${({ theme }) => theme.colors.scrollBtnHover};
        }
`