import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SectionTitle } from 'components/common'
import { ProductCardContainer, ProductCardIconsContainer, ProductCardPhoto, ProductCardIconsBox, ProductImg, IconBox } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';
import uuid from 'react-uuid'
import { ReactComponent as PriceIcon } from 'assets/product-props/price.svg'
import { ReactComponent as VatIcon } from 'assets/product-props/vat.svg'
import { ReactComponent as PetrolIcon } from 'assets/product-props/petrol.svg'
import { ReactComponent as RoadIcon } from 'assets/product-props/road.svg'

import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { Button, PropCard } from "components/common"

export const ProductCard = ({ bgImage, product, i, sellIcon }) => {
    const { themeMode } = useContext(ThemeContext);
    const even = i % 2 == 0

    const cardImage = getImage(bgImage)

    const icon = product.sold.checkboxOptions[0].checked ? sellIcon?.localFile.childSvg : null

    const img = product.sold.checkboxOptions[0].checked ? sellIcon?.localFile.childImageSharp : null
    console.log(icon)
    return (
        <>
            <ProductCardContainer
                css={`
            @media (min-width: ${({ theme }) => theme.device.m}) {
                align-self: ${even ? "flex-end" : "flex-start"};
            }

            @media (min-width: ${({ theme }) => theme.device.l}) {
                align-self: ${even ? "flex-end" : "flex-start"};
            }
            `}>

                <ProductCardIconsContainer
                    style={{
                        right: (even ? "0" : ""),
                        left: (even ? "" : "0")
                    }}>
                    <ProductCardIconsBox
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: (even ? "0" : ""),
                            left: (even ? "" : "0")
                        }}
                    >

                        <PropCard content={product.price + " pln"}>
                            <PriceIcon />
                        </PropCard>

                        <PropCard content={product.invoice.checkboxOptions[0].checked ? "tak" : "nie"}>
                            <VatIcon />
                        </PropCard>

                        <PropCard content={product.oil}>
                            <PetrolIcon />
                        </PropCard>

                        <PropCard content={product.courseValue}>
                            <RoadIcon />
                        </PropCard>
                    </ProductCardIconsBox>
                </ProductCardIconsContainer>

                <ProductCardPhoto
                    style={{
                        right: (even ? "" : "0"),
                        left: (even ? "0" : "")
                    }}
                >
                    <IconBox
                        style={{
                        right: (even ? "0" : ""),
                        left: (even ? "" : "0")
                    }}>
                                {
                img ?
                <GatsbyImage image={getImage(img)} alt={bgImageAlt ? bgImageAlt : siteTitle} />
                :
                icon ?
                <section
                dangerouslySetInnerHTML={{ __html: icon.content.data }}
                />
                :
                null
            } </IconBox>
                    <ProductImg image={cardImage} alt={product.productName} />
                    <SectionTitle
                        style={{
                            textAlign: (even ? "right" : "left"),
                        }}
                        productName>
                        <h4>{product.productName}</h4>
                    </SectionTitle>



                    <Link
                        to={`/oferta/${product.slug}/`}>
                        <Button
                            themeMode={themeMode}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: (even ? "" : "0"),
                                left: (even ? "0" : "")
                            }}
                        >sprawdź</Button>
                    </Link>

                </ProductCardPhoto>


            </ProductCardContainer>
        </>

    );
};
