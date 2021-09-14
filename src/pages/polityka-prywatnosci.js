import React from "react";
import { Layout } from "components/theme"
import { Seo, HeroHeader, ContentBox, SectionTitle } from "components/common";
import { graphql, useStaticQuery } from "gatsby"
import { CustomedNav } from 'components/theme'

import { getImage } from "gatsby-plugin-image"

const PolicyPage = () => {
	const { SeoData, PolicyData } = useStaticQuery(
		graphql`
	query {

		SeoData: wpLasykescore(slug: {eq: "seo-content"}) {
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

         PolicyData: wpVentusautamain(slug: {eq: "policy-external-page"}) {
            policyContent
            policyTitle
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

  const { policyContent, policyTitle, headerImage } = PolicyData

  const icon = headerImage?.localFile.childSvg

	const img = headerImage?.localFile.childImageSharp
 
    return (

        <Layout>
            <Seo title="polityka prywatności" location="/polityka-prywatnosci" SeoData={SeoData} />
            <CustomedNav />
            <HeroHeader
                small
                bgImage={img}
                bgIcon={icon}
            >
            </HeroHeader>

            <SectionTitle secondary>
                <h4>{policyTitle}</h4>
            </SectionTitle>


            <ContentBox
                css={`
                padding: 2rem;`}
                dangerouslySetInnerHTML={{ __html: policyContent }}
                />
        </Layout>
    );
}

export default PolicyPage;
