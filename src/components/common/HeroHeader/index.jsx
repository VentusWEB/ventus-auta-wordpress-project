import React from "react"
import { HeroHeaderBox, HeroHeaderText, HeroHeaderImg } from './styles.js'

export function HeroHeader({
    children,
    bgImage,
    HeroBrandName,
    HeroSubName,
    small }) {
    return (
        <HeroHeaderBox small={small}>
            <HeroHeaderImg image={bgImage} />
            <HeroHeaderText small={small}>
                <h2>{HeroBrandName}</h2>
                <h4>{HeroSubName}</h4>
            </HeroHeaderText>
            {children}

        </HeroHeaderBox>
    )
}

