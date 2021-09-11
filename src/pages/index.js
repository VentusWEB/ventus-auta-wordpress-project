import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Layout } from "components/theme"
import { Seo, HeroHeader, SeparateBox } from "components/common";
import { Offer, About, ContactLocation } from "components/landing";

import { getImage } from "gatsby-plugin-image"

const Home = () => {
	const { img, productData, products } = useStaticQuery(
		graphql`
	query {
		products: allWpVentusautaproduct {
			edges {
			  node {
				slug
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

		  productData:  allItemsDataJson {
			nodes {
			  slug
			  name
			  price
			  invoice
			  petrol
			  course
			  rgb
	
			  mainImage {
				childImageSharp {
					gatsbyImageData(
						quality: 60, 
						webpOptions: {quality: 60})
					}
			  
			  }
			}
		  }
	}
	`
	);


	const backgroundImage = getImage(img);
	console.log(products)

	return (
		<Layout>
			<Seo title="Ventus Trade Auta" location="/" />
			<HeroHeader
				small
				bgImage={backgroundImage}
				backgroundImage={img}
				HeroBrandName="Ventus Trade"
				HeroSubName="pojazdy & urządzenia"
			>
			</HeroHeader>
			<SeparateBox />
			<Offer productData={productData} />
			<ContactLocation />
			<About />

		</Layout>
	)
};

export default Home;
