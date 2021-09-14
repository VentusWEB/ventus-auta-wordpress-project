import React from 'react';

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, ProductsSectionWrapper } from './styles';
import { SectionTitle } from 'components/common'

import { ProductCard } from 'components/product'



export const Offer = ({ productData, OfferData }) => {

    const order = OfferData.order

    const title = OfferData.textHeader

    const subTitle = OfferData.textSubheader

    const id = OfferData.sectionTitle.replace(" ", "-").toLowerCase()

    const content = OfferData.paragraphs.fieldsList

    return (
        <Wrapper id={id} css={`{ order: ${order}; }`} >

            <OffersWrapper secondary>
                <SectionTitle black>
                    <h4>{title}</h4>
                </SectionTitle>
                <OfferContentBox>
                        {
                            content.map(( item, i ) => ( (i==content.length-1) ? 
                            (<em>{item.paragraph}</em>)
                            :
                            (<p>{item.paragraph}</p>)
                            ))
                        }
                </OfferContentBox>

            </OffersWrapper>
            <ProductsSectionWrapper>



                <ProductsWrapper secondary
                css={`
                    padding: 50px 0 100px;
                `}>
                    {productData.nodes.map((product, i) => {
                        return (
                            <>
                                <ProductCard key={i} product={product} bgImage={product.mainImage.localFile.childImageSharp.gatsbyImageData} i={i} />
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
                    <h4>{subTitle}</h4>
                </SectionTitle>
            </ProductsSectionWrapper>
        </Wrapper>


    );
};
