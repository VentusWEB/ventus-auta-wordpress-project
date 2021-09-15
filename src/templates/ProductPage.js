import React from "react"
import { graphql, Link } from "gatsby"
import { Layout, CustomedNav } from "components/theme"
import { Seo, PropCard, Button, SectionTitle, HeroHeader } from "components/common";
import { getImage } from 'gatsby-plugin-image'

import { ProductModalGallery } from 'gatsby-plugin-modal-gallery'

import { ProductWrapper, VinBox, ParametersBox, GridContentBox, GridBoxDetails, GridInfoBox, ModalContainer, ModalInfoBox, ModalGalleryBox } from "components/product"

import { alternativeLinks } from "constans/nav-items"


import { ReactComponent as PriceIcon } from 'assets/product-props/price.svg'
import { ReactComponent as VatIcon } from 'assets/product-props/vat.svg'
import { ReactComponent as PetrolIcon } from 'assets/product-props/petrol.svg'
import { ReactComponent as RoadIcon } from 'assets/product-props/road.svg'
import { ReactComponent as AutomatIcon } from 'assets/product-props/gearboxAutomatic.svg'
import { ReactComponent as ManualIcon } from 'assets/product-props/gearboxManual.svg'
import { ReactComponent as HorseIcon } from 'assets/product-props/powerhorse.svg'
import { ReactComponent as EngineIcon } from 'assets/product-props/engine.svg'




export const query = graphql`
query($slug: String!) {
    wpVentusautaproduct(slug: { eq: $slug }) {
    courseValue
    description
    vin
    type
    price
    grossPrice
    gearbox
    generation
    power
    oil
    model
    productName
    year
    mainImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    secondImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    kind
    invoice {
      checkboxOptions {
        checked
        value
      }
    }
    properties {
      checkboxOptions {
        checked
        value
      }
    }
    imported {
      checkboxOptions {
        checked
        value
      }
    }
    invoice {
      checkboxOptions {
        checked
      }
    }
    loanable {
      checkboxOptions {
        checked
      }
    }
    images: gallery {
      imagesList {
        image {
          localFile {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    drive
    capacity
    brand
  } 



      SeoData: wpVentusautacore(slug: {eq: "seo-content"}) {
        author
        city
        country
        dir
        email
        facebook
        instagram
        logoUrl
        legalName
        lang
        phone
        region
        siteDescription
        siteBrand
        thumbnail {
          altText
          localFile {
            ...FileFragmentSvg
            ...FileFragmentImg
          }
        }
        siteTitle
        twitter
        title
        github
        defaultTitle
        defaultDescription
        foundingDate
        zipCode
        url
      }

      NavProducts:  allWpVentusautaproduct {
        edges{
        node {
              productName
              databaseId
              slug
            }
          }
      }

  
}
`

const ProductPage = ({ data, key }) => {

  const styles = {
    background : "red",
    borderRadius :"30px",
    transition : ".4s ease-in-out",
    mediaWidth : "700px",
    controlsColor : "white",
    controlsSize : "10px",
    controlsOpacity : ".9",
    controlsColorHover : "black",
    controlsOpacityHover : ".4",
    controlsSizeBig  : "50px",
    imgWidth: "200px",
    imgHeight: "200px",
    maxModalImgHeight: "90vh",
    minModalImgHeight: "90vh",
    maxModalImgWidth: "90vw",
    minModalImgWidth: "90vw",
  
    overlay: {
      backgroundColor: 'rgba(255,255,255,.8)',
      cursor: 'pointer',
      transition: '2s',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }//data for react modal
  
  }

  const backgroundImage = getImage(data.img);

  const SeoContent = data.SeoData

  const singleProductData = data.wpVentusautaproduct

  const mainImage = singleProductData.mainImage.localFile

  const images = singleProductData.images.imagesList

  const gallery = []

  images.map((item, i) => (
    gallery.push(
      [
        item.image.localFile.childImageSharp,
        item.image.localFile.name,
        i
      ]
    )
  ))


  const NavProducts = data.NavProducts

  let menuArray = [];

	menuArray = NavProducts.edges.map(function (item) {
  
	  return {
		path: 'oferta/'+item.node.slug,
		label: item.node.productName,
		order: item.node.databaseId
	  };
	});

  const {
    drive,
    properties,
    loanable,
    imported,
    course,
    invoice,
    gearbox,
    capacity,
    brand,
    courseValue,
    description,
    kind,
    vin,
    grossPrice,
    type,
    slug,
    price,
    power,
    generation,
    oil,
    model,
    productName,
    year
  } = singleProductData

  return (
    <Layout alternativeLinks={alternativeLinks}>
      <Seo SeoData={SeoContent} />
      <CustomedNav scroll={false} menuItems={menuArray.sort(() => Math.random() - 0.5).slice(0,3)} />
      <HeroHeader small
        bgImage={backgroundImage}
        headerBg="rgba(0,0,0,0.5)"
        afterOpacity="0.3 !important"
        HeroHeight="40vh"
        HeroWidthMedia="40vh"
        HeroHeightMedia="40vh"
        backgroundImage={backgroundImage}
        HeroBrandName="Ventus Trade"
        HeroSubName="pojazdy & urządzenia"
      >
      </HeroHeader>
      <ProductWrapper>
      <Link to="/"><Button back>powrót</Button></Link>

      <ModalContainer>

        <ModalGalleryBox>
        <ProductModalGallery styles={styles} mainImage={mainImage} photos={gallery} index='1' />
        </ModalGalleryBox>

        <ModalInfoBox>
          <GridBoxDetails>

            <ParametersBox >
              <h1>{productName}</h1>
              <SectionTitle fifth ><h4>Parametry</h4></SectionTitle>
              <PropCard content={price + " pln"}>
                <PriceIcon />
              </PropCard>

              <PropCard content={invoice.checkboxOptions[0].checked ? "tak" : "nie"}>
                <VatIcon />
              </PropCard>

              <PropCard content={oil}>
                <PetrolIcon />
              </PropCard>

              <PropCard content={courseValue}>
                <RoadIcon />
              </PropCard>

              <PropCard content={power + " km"}>
                <HorseIcon />
              </PropCard>

              <PropCard content={capacity + " cm3"}>
                <EngineIcon />
              </PropCard>

              <PropCard content={gearbox}>
                {gearbox === 'manual' ? <ManualIcon /> : <AutomatIcon />}
              </PropCard>

            </ParametersBox>

            <ParametersBox >
              <SectionTitle fifth><h4>Opis</h4></SectionTitle>
              <p>{description}</p>
            </ParametersBox>
            {
              vin !== '0' && (
                <>
                  <VinBox>
                    <SectionTitle six><h4>VIN</h4></SectionTitle>
                    <span>{vin}</span>
                  </VinBox>
                </>
              )
            }
          </GridBoxDetails>

          <GridInfoBox>
            <GridContentBox >
              <SectionTitle fifth><h4>Informacje</h4></SectionTitle>
              <p><span>Marka:</span>{brand}</p>
              <p><span>Model:</span>{model}</p>
              <p><span>Rok:</span>{year}</p>
              {grossPrice !== '0' && (<p><span>Cena brutto:</span>{grossPrice}</p>)}
              {price !== '0' && (<p><span>Cena netto:</span>{price}</p>)}
              {generation !== '0' && (<p><span>Generacja:</span>{generation}</p>)}
              {drive !== '0' && (<p><span>Napęd:</span>{drive}</p>)}



            </GridContentBox>
            <GridContentBox secondary>
              {imported.checkboxOptions.check && (<p><span>Importowany</span></p>)}
              {loanable.checkboxOptions.check && (<p><span>Możliwość wynajmu</span></p>)}
            </GridContentBox>



            <GridContentBox >
              <SectionTitle fifth><h4>Wyposażenie</h4></SectionTitle>
              {properties.checkboxOptions.map((item, i) => (
                item.checked && 
                (<li i={i}>✓ {item.value}</li>)
              ))}

            </GridContentBox>
          </GridInfoBox>
        </ModalInfoBox>

      </ModalContainer>
      </ProductWrapper>
    </Layout>
  )
}

export default ProductPage
