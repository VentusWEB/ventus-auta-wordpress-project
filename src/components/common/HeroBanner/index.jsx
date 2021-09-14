import React from 'react';

import { Link } from "gatsby"

import { Button } from "components/common"

import { HeroBannerBox } from './styles'


export const HeroBanner = ({ titleInfo, contentInfo, buttonText}) => {

    return (
        <>
            <HeroBannerBox>
                <h3>{titleInfo ? titleInfo : 'wybrana strona nie istnieje' }</h3>
                <span>{contentInfo ? contentInfo : 'zapraszamy do naszej strony głównej' }</span>
                <Link to="/" ><Button>{buttonText ? buttonText : 'strona główna'}</Button></Link>
            </HeroBannerBox>
        </>

    );
};
