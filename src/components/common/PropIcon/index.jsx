import React from 'react';
import { PropIconContainer, PropIconBox, PropIconInfo } from './styles';

import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";

/* import { Button } from 'components/common' */
export const PropIcon = () => {



    return (
        <>
            <PropIconContainer>
                <PropIconBox>
                    <FaPhoneSquareAlt />
                </PropIconBox>
                <PropIconInfo>
                    120 000 KM
                </PropIconInfo>
            </PropIconContainer>
        </>

    );
};
