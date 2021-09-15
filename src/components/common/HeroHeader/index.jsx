import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeroHeaderBox, HeroHeaderText, HeroHeaderImg } from './styles.js'

import { getImage } from "gatsby-plugin-image"

export function HeroHeader({
    children,
    bgImage,
    bgIcon,
    bgImageAlt,
    HeroBrandName,
    HeroSubName,
    small }) {

        const { headerContent } = useStaticQuery(
            graphql`
        query {
            headerContent: wpVentusautacore(slug: {eq: "site-content"}) {
                siteTitle
                siteSubTitle
                siteHeader {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
              }
        }
        `
        );

    const { siteTitle, siteSubTitle, siteHeader } = headerContent

    const icon = bgIcon ? bgIcon : siteHeader?.localFile.childSvg

	const img = bgImage ? bgImage : siteHeader?.localFile.childImageSharp

    return (
        <HeroHeaderBox small={small}>

            {
                img ?
                <HeroHeaderImg image={getImage(img)} alt={bgImageAlt ? bgImageAlt : siteTitle} />
                :
                icon ?
                <section
                className="svg-bg"
                key={uuid()}
                dangerouslySetInnerHTML={{ __html: icon.content.data }}
                />
                :
                null
            }

            <HeroHeaderText small={small}>
                <h2>{HeroBrandName ? HeroBrandName : siteTitle}</h2>
                <h4>{HeroSubName ? HeroSubName : siteSubTitle}</h4>
            </HeroHeaderText>
            {children}

        </HeroHeaderBox>
    )
}

