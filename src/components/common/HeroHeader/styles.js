import styled from "styled-components"

import { GatsbyImage } from "gatsby-plugin-image"

export const HeroHeaderBox = styled.div`
position: relative;
height: 95vh;

${({ small }) =>
        small &&
        `  height: 40vh;
                    
                                `}

@media (min-width: ${({ theme }) => theme.device.l}){
    height: 65vh;
}

&:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .7;
    background: ${({ theme }) => theme.colors.heroBgSecondary};
    z-index: 1;
}

.svg-bg {
    height: 100%;
    width: 100%;
}

`

export const HeroHeaderText = styled.div`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
  -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: ${({ theme }) => theme.colors.third};

${({ small }) =>
        small &&
        ` 
        top: unset;
        left: unset;
        bottom: 0;
        right: 0;
        transform: translate(-20px,-20px);
                    
                                `}

@media (min-width: ${({ theme }) => theme.device.l}){
    top: unset;
    left: unset;
    bottom: 0;
    right: 0;
    translate(-100px,-100px);
}

`

export const HeroHeaderImg = styled(GatsbyImage)`
position: absolute;
height: 100%;
width: 100%;

`
