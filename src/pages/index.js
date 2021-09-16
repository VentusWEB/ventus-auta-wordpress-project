import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Layout, CustomedNav } from "components/theme"
import { Seo, HeroHeader, SeparateBox } from "components/common";
import { Offer, About, ContactLocation } from "components/landing";


const Home = () => {

	const { SeoData, OfferData, AboutData, AboutFeatures, LocationData, ContactData, ContactBrandInfo, ContactItems, LocationAddress, LocationMap, LocationContent,  mainArray,  sellIcon, products, icons } = useStaticQuery(
		graphql`
	query {

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


          mainArray: allWpVentusautamain(filter: {slug: {glob: "*section-page"}}) {
            edges {
              node {
                sectionTitle
                order
              }
            }
          }

		  ContactBrandInfo: wpVentusautamain(slug: {eq: "contact-section-page"}) {

				brandInfo1 {
					multiBox {
					content
					title
					type
					}
				}
				brandInfo2 {
					multiBox {
					content
					title
					type
					}
				}
			}


		  ContactItems:  wpVentusautamain(slug: {eq: "contact-section-page"}) {

			phone {
				multiBox {
				  content
				  type
				  title
				  img {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }
				}
			  }

			mail {
				multiBox {
					content
					type
					title
					img {
					  localFile {
						childImageSharp {
						  gatsbyImageData
						}
						childSvg {
						  content {
							data
						  }
						}
					  }
					}
				  }
				}

			whatsapp {
				multiBox {
					content
					type
					title
					img {
					  localFile {
						childImageSharp {
						  gatsbyImageData
						}
						childSvg {
						  content {
							data
						  }
						}
					  }
					}
				  }
				}

		  	}
	

		  LocationContent: wpVentusautamain(slug: {eq: "location-section-page"}) {
			paragraphs {
				fieldsList {
				  paragraph
				}
			  }
		  }

		   
          LocationAddress: wpVentusautamain(slug: {eq: "location-section-page"}) {
		  locationInfo1 {
			multiBox {
			  content
			  title
			  type
			}
		  }
		  locationInfo2 {
			multiBox {
			  content
			  title
			}
		  }
		}



          LocationMap: wpVentusautamain(slug: {eq: "location-section-page"}) {
			map {
				localFile {
					childImageSharp {
						gatsbyImageData(
							quality: 60, 
							webpOptions: {quality: 60})
						}
				  childSvg {
					id
					content {
					  data
					}
				  }
				}
			  }
            }
     
		sellIcon: wpVentusautacore(slug: {eq: "svg-icons-content"}) {
			iconSell {
				  localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
				}
			}

			icons: wpVentusautacore(slug: {eq: "svg-icons-content"}) {
			iconSell {
				  localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
				}

				engine {
				  localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
				}

				gearboxAutomatic {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }
  
				  gearboxManual {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }

				  petrol {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }
  
				  road {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }

				  vat {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }
  
			  price {
					localFile {
					  childImageSharp {
						gatsbyImageData
					  }
					  childSvg {
						content {
						  data
						}
					  }
					}
				  }
			}

		products: allWpVentusautaproduct {

			  nodes {
				slug
				productName
				price
				invoice {
					checkboxOptions {
					  checked
					  value
					}
				  }
				sold {
					checkboxOptions {
					  checked
					  value
					}
				  }
				oil
				course
				courseValue
	  
				mainImage {
					localFile{
						childImageSharp {
							gatsbyImageData(
								quality: 60, 
								webpOptions: {quality: 60})
							}
						}
					}
			}
		}

		  LocationData: wpVentusautamain(slug: {eq: "location-section-page"}) {
            ...CommonContent

			map {
				localFile {
					childImageSharp {
						gatsbyImageData(
							quality: 60, 
							webpOptions: {quality: 60})
						}
				  childSvg {
					id
					content {
					  data
					}
				  }
				}
			  }

			  paragraphs {
				fieldsList {
				  paragraph
				}
			  }

          }


		  ContactData: wpVentusautamain(slug: {eq: "contact-section-page"}) {
            ...CommonContent
          }


		  AboutData: wpVentusautamain(slug: {eq: "about-section-page"}) {
            ...CommonContent
			paragraphs {
				fieldsList {
				  paragraph
				}
			  }
          }

		  AboutFeatures: wpVentusautamain(slug: {eq: "about-section-page"}) {

		  features1 {
			multiBox {
			  content
			  img {
				localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
			  	}
			  title
			  type
			}
		  }

		  features2 {
			multiBox {
			  content
			  img {
				localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
			  	}
			  title
			  type
			}
		  }

		  features3 {
			multiBox {
			  content
			  img {
				localFile {
					childImageSharp {
					  gatsbyImageData
					}
					childSvg {
					  content {
						data
					  }
					}
				  }
			  	}
			  title
			  type
			}
		  }

		}
		  OfferData: wpVentusautamain(slug: {eq: "offer-section-page"}) {
            ...CommonContent
			textSubheader
			paragraphs {
				fieldsList {
				  paragraph
				}
			  }
          }

	

	}
	`
	);


	let menuArray = [];

	menuArray = mainArray.edges.map(function (item) {
  
	  return {
		path: item.node.sectionTitle.replace(" ", "-").toLowerCase(),
		label: item.node.sectionTitle,
		order: item.node.order
	  };
	});

	return (
		<Layout>
			<Seo title="Ventus Trade Auta" location="/" SeoData={SeoData}/>

<CustomedNav scroll={true} menuItems={menuArray} />
			<HeroHeader
				small
			>
			</HeroHeader>
			<SeparateBox />
			<div css={`display: flex; flex-direction: column;`}>
			<Offer productData={products} OfferData={OfferData} sellIcon={sellIcon} icons={icons}/>
			<ContactLocation ContactData={ContactData} LocationData={LocationData} LocationMap={LocationMap} LocationAddress={LocationAddress} LocationContent={LocationContent} ContactItems={ContactItems} ContactBrandInfo={ContactBrandInfo}/>
			<About AboutData={AboutData} AboutFeatures={AboutFeatures} />
			</div>

		</Layout>
	)
};

export default Home;
