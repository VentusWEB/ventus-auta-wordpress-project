import React from 'react';

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, ProductsSectionWrapper } from './styles';
import { SectionTitle } from 'components/common'

import { ProductCard } from 'components/product'



export const Offer = ({ productData, OfferData, sellIcon, icons, productCardIcons }) => {

    const order = OfferData.order

    const title = OfferData.textHeader

    const subTitle = OfferData.textSubheader

    const id = OfferData.sectionTitle.replace(" ", "-").toLowerCase()

    const content = OfferData.paragraphs.fieldsList

    const { price, vat, petrol, road } = icons

    const iconPrice = price?.localFile.childSvg

    const imgPrice = price?.localFile.childImageSharp 

    const iconVAT = vat?.localFile.childSvg

    const imgVAT = vat?.localFile.childImageSharp 

    const iconPetrol = petrol?.localFile.childSvg

    const imgPetrol = petrol?.localFile.childImageSharp 

    const iconRoad = road?.localFile.childSvg

    const imgRoad = road?.localFile.childImageSharp 

    const iconsArray = []



    Object.keys(productCardIcons).map(((keyName, i) => {iconsArray.push( {
        img: productCardIcons[keyName],
        icon: productCardIcons[keyName],
    }

        )}))

/*         contentArray.map((item, i) => {
            iconsArray.push( {
                item
        }) */


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
                    {productData.map((product, i) => {

                        return (
                            <>
                                <ProductCard icons={icons} sellIcon={sellIcon.iconSell} key={i} product={product} bgImage={product.mainImage.localFile.childImageSharp.gatsbyImageData} i={i} iconsArray={iconsArray}  />
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
