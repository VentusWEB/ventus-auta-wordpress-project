import React from 'react';

import { Link } from "gatsby"

import { Button } from "components/common"

import { HeroBannerBox } from './styles'


export const HeroBanner = ({ buttonOne, buttonTwo, text, subText }) => {

    return (
        <>
            <HeroBannerBox>
                <h3>{text}wybrana strona nie istnieje</h3>
                <span>{subText}zapraszamy do naszej strony głównej</span>
                <Link to="/"><Button>strona główna</Button></Link>
            </HeroBannerBox>
        </>

    );
};
