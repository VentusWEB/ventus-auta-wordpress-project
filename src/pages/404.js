import React from "react";
import { Layout } from "components/theme"
import { Seo, HeroHeader, HeroBanner } from "components/common";
import { graphql, useStaticQuery } from "gatsby"

import { getImage } from "gatsby-plugin-image"

const NotFound = () => {
	const { img } = useStaticQuery(
		graphql`
	query {
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
	);

	const backgroundImage = getImage(img);

	return (

		<Layout>
			<Seo title="strona niedostępna" location="/404" />
			<HeroHeader
				small
				bgImage={backgroundImage}
				backgroundImage={img}
				HeroBrandName="Ventus Trade"
				HeroSubName="pojazdy & urządzenia"
			>
				<HeroBanner>

				</HeroBanner>
			</HeroHeader>
		</Layout>
	);
}

export default NotFound;
