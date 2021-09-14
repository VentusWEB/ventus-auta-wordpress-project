import React from "react";
import { Layout } from "components/theme"
import { Seo, HeroHeader, HeroBanner } from "components/common";
import { graphql, useStaticQuery } from "gatsby"
import { CustomedNav } from 'components/theme'

const NotFound = () => {
	const { SeoData, ErrorData } = useStaticQuery(
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

         ErrorData: wpVentusautamain(slug: {eq: "error-external-page"}) {
			titleInfo
			contentInfo
			buttonText
            headerImage {
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
	`
	);

	const { titleInfo, contentInfo, buttonText, headerImage } = ErrorData

	
	const icon = headerImage?.localFile.childSvg

	const img = headerImage?.localFile.childImageSharp


	return (

		<Layout>
			<Seo title="strona niedostępna" location="/404" SeoData={SeoData}/>
			<CustomedNav />
			<HeroHeader
                bgImage={img}
                bgIcon={icon}
			>
				<HeroBanner
				titleInfo={titleInfo}
				contentInfo={contentInfo}
				buttonText={buttonText}
				>

				</HeroBanner>
			</HeroHeader>
		</Layout>
	);
}

export default NotFound;
