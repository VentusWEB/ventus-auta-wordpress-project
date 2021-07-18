import React from 'react';

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, ProductsSectionWrapper } from './styles';
import { SectionTitle } from 'components/common'

import { ProductCard } from 'components/product'



export const Offer = ({ productData }) => {



    return (
        <Wrapper id="offer" >

            <OffersWrapper secondary>
                <SectionTitle black>
                    <h4>Oferta</h4>
                </SectionTitle>
                <OfferContentBox>
                    <p>W swojej ofercie dysponujemy pojazdami mechanicznymi różnych marek. Z reguły są to importowane samochody oraz urządzenia budowlane.</p>
                    <p>Po zakupie każdy z pojazdów jest gruntownie weryfikowany przez oko wyspecjalizowanego mechanika.</p>
                    <em>Serdecznie zapraszamy do zapoznania się z naszą ofertą.</em>
                </OfferContentBox>

            </OffersWrapper>
            <ProductsSectionWrapper>



                <ProductsWrapper secondary>
                    {productData.nodes.map((product, i) => {
                        return (
                            <>
                                <ProductCard key={i} product={product} bgImage={product.mainImage.childImageSharp.gatsbyImageData} i={i} />
                            </>

                        )
                    })}

                </ProductsWrapper>
                <SectionTitle black
                    css={`
                position: absolute;
                bottom: 0;
                right: 0;
                `}>
                    <h4>Dostępne maszyny</h4>
                </SectionTitle>
            </ProductsSectionWrapper>
        </Wrapper>


    );
};
