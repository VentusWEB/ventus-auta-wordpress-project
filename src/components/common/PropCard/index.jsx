import React from 'react';

import { PropCardContainer, PropCardBox, PropCardInfo } from './styles';

/* import { Button } from 'components/common' */
export const PropCard = ({ secondary, third, fourth, content, children, className, center }) => {



    return (
        <>
            <PropCardContainer className={className} secondary={secondary} third={third} fourth={fourth} center={center}>
                <PropCardBox secondary={secondary} third={third} fourth={fourth} center={center}>
                    {children}
                </PropCardBox>
                <PropCardInfo secondary={secondary} third={third} fourth={fourth} center={center}>
                    {content}
                </PropCardInfo>
            </PropCardContainer>
        </>

    );
};
