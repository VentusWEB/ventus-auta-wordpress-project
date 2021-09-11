import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "components/theme"
import { Seo, PropCard, Button, SectionTitle, HeroHeader } from "components/common";
import { getImage } from 'gatsby-plugin-image'

import { ProductModalGallery } from 'gatsby-plugin-modal-gallery'

import { VinBox, ParametersBox, GridContentBox, GridBoxDetails, GridInfoBox, ModalContainer, ModalInfoBox, ModalGalleryBox } from "components/product"

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

    vin
    type
    slug
    price
    power
    oil
    model
    productName
    productFullName
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
    imported {
      checkboxOptions {
        checked
        value
      }
    }
    images: gallery {
      imagesList {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    drive
    course
    capacity
    brand
  } 


    itemsDataJson(slug: { eq: $slug }) {
      name
      description
      extras
      vin
      type
      price
      grossPrice
      power
      petrol
      imported
      invoice
      brand
      model
      generation
      year
      course
      capacity
      gearbox
      drive
      loanable
      rgb

      mainImage {
        childImageSharp {
          gatsbyImageData
        }
        name
      }

      photos: gallery{
        image {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }

	  img:  file(relativePath: { eq: "PageHeaders/homeBg.jpg" }) {
		  childImageSharp {
			gatsbyImageData(
				width: 1200, 
				quality: 60, 
				webpOptions: {quality: 75})
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

  const productData = data.itemsDataJson

  const mainImage = productData.mainImage

  const photos = productData.photos

  const images = productData.images


  console.log(images)

  const gallery = []

  photos.map((item, i) => (
    gallery.push(
      [
        item.image.childImageSharp,
        item.image.name,
        i
      ]
    )
  ))

  console.log(photos)
  console.log(gallery)
  return (
    <Layout alternativeLinks={alternativeLinks}>
      <Seo />
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
      <Link to="/"><Button back>powrót</Button></Link>

      <ModalContainer>

        <ModalGalleryBox>
        <ProductModalGallery styles={styles} mainImage={mainImage}/* styles={styles} currentImg={image} current={image} */ photos={gallery} index='1' />
          {/* <ProductModalGallery mainImage={mainImage} photos={gallery} /> */}
        </ModalGalleryBox>

        <ModalInfoBox>
          <GridBoxDetails>

            <ParametersBox >
              <h1>{productData.name}</h1>
              <SectionTitle fifth ><h4>Parametry</h4></SectionTitle>
              <PropCard content={productData.price + " pln"}>
                <PriceIcon />
              </PropCard>

              <PropCard content={productData.invoice ? "tak" : "nie"}>
                <VatIcon />
              </PropCard>

              <PropCard content={productData.petrol}>
                <PetrolIcon />
              </PropCard>

              <PropCard content={productData.rgb ? productData.course + " rbg" : productData.course + " km"}>
                <RoadIcon />
              </PropCard>

              <PropCard content={productData.power + " km"}>
                <HorseIcon />
              </PropCard>

              <PropCard content={productData.capacity + " cm3"}>
                <EngineIcon />
              </PropCard>

              <PropCard content={productData.gearbox === 'manual' ? 'manual' : 'automat'}>
                {productData.gearbox === 'manual' ? <ManualIcon /> : <AutomatIcon />}
              </PropCard>

            </ParametersBox>

            <ParametersBox >
              <SectionTitle fifth><h4>Opis</h4></SectionTitle>
              <p>{productData.description}</p>
            </ParametersBox>
            {
              productData.vin !== "" && (
                <>
                  <VinBox>
                    <SectionTitle six><h4>VIN</h4></SectionTitle>
                    <span>{productData.vin}</span>
                  </VinBox>
                </>
              )
            }
          </GridBoxDetails>

          <GridInfoBox>
            <GridContentBox >
              <SectionTitle fifth><h4>Informacje</h4></SectionTitle>
              <p><span>Marka:</span>{productData.brand}</p>
              <p><span>Model:</span>{productData.model}</p>
              <p><span>Rok:</span>{productData.year}</p>
              {productData.grossPrice && (<p><span>Cena brutto:</span>{productData.grossPrice}</p>)}
              {productData.price && (<p><span>Cena netto:</span>{productData.price}</p>)}
              {productData.generation && (<p><span>Generacja:</span>{productData.generation}</p>)}
              {productData.drive && (<p><span>Napęd:</span>{productData.drive}</p>)}



            </GridContentBox>
            <GridContentBox secondary>
              {productData.imported && (<p><span>Importowany</span></p>)}
              {productData.loanable && (<p><span>Możliwość wynajmu</span></p>)}
            </GridContentBox>



            <GridContentBox >
              <SectionTitle fifth><h4>Wyposażenie</h4></SectionTitle>
              {productData.extras.map((item, i) => (
                <li i={i}>✓ {item}</li>
              ))}

            </GridContentBox>
          </GridInfoBox>
        </ModalInfoBox>

      </ModalContainer>
    </Layout>
  )
}

export default ProductPage


/* wpVentusautaproduct {
    vin
    type
    slug
    price
    power
    oil
    model
    productName
    productFullName
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
    imported {
      checkboxOptions {
        checked
        value
      }
    }
    gallery {
      imagesList {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    drive
    course
    capacity
    brand
  } */