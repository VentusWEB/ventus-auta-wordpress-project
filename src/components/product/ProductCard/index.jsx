import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SectionTitle } from 'components/common'
import { ProductCardContainer, ProductCardIconsContainer, ProductCardPhoto, ProductCardIconsBox, ProductImg, IconBox } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

import { ReactComponent as VentusIcon } from 'assets/svgs/vt-logo.svg'

import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { Button, PropCard } from "components/common"

export const ProductCard = ({ bgImage, product, i, sellIcon, icons, iconsArray }) => {

    const { themeMode } = useContext(ThemeContext);
    const even = i % 2 == 0
    const cardImage = getImage(bgImage)

    const icon = product.sold.checkboxOptions[0].checked ? sellIcon?.localFile.childSvg : null

    const img = product.sold.checkboxOptions[0].checked ? sellIcon?.localFile.childImageSharp : null

    const contentArray = [
        product.price + " pln", 
        product.invoice.checkboxOptions[0].checked ? "tak" : "nie", 
        product.oil, 
        product.courseValue, 
    ]

    iconsArray.map((item, i ) => {
        item.content = contentArray[i];
    })


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

                        {iconsArray.map((item, i) => {
                            const { content, img, icon } = item

                            const image = img?.localFile.childImageSharp

                            const svg = icon?.localFile.childSvg 

                        return(
                            <PropCard content={content}>
    
                            {
                                image ?
                                <GatsbyImage image={getImage(image)} alt="" />
                                :
                                svg ?
                                <section
                                dangerouslySetInnerHTML={{ __html: svg?.content.data }}
                                />
                                :
                                <VentusIcon />
                            } 
    
                            </PropCard>
                            )
                        }
                        
)}


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
