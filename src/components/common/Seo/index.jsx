import React from "react";
import Helmet from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";


export const Seo = ({SeoData}) => {

    const {

        city,
        country,
        dir,
        author,
        email,
        facebook,
        instagram,
        logoUrl,
        legalName,
        lang,
        phone,
        region,
        siteDescription,
        siteBrand,
        thumbnail,
        siteTitle,
        twitter,
        title,
        github,
        defaultTitle,
        defaultDescription,
        foundingDate,
        zipCode,
        url
    } = SeoData

 
    const icon = thumbnail?.localFile.childSvg

    const img = thumbnail?.localFile.childImageSharp

    const structuredDataOrganization = `{ 
        "@context": "http://schema.org",
        "@type": "Organization",
        "legalname": "${legalName}",
        "url": "${logoUrl}",
        "logo": "${logoUrl}",
        "foundingdate": "${foundingDate}",
        "founders": [{
            "@type": "Person",
            "name": "${legalName}"
        }],
        "contactPoint": [{
            "@type": "ContactPoint",
            "email": "${email}",
            "telephone": "${phone}",
            "contactType": "customer service"
        }],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "${city}",
            "addressRegion": "${region}",
            "addressCountry": "${country}",
            "postalCode": "${zipCode}"
        },
        "sameAs": [
            "${twitter}",
            "${instagram}",
            "${github}"
        ]
        }`;

    return (
        <Helmet>
            <meta name="description" content={defaultDescription} />
            <meta name="image" content={
                img ?
                <GatsbyImage
                alt={thumbnail.altText}
                image={thumbnail.gatsbyImageData}
            />
            :
            icon ?

                <div dangerouslySetInnerHTML={{ __html: icon.content.data }} />
:
""
                } />
            <meta name="author" content={author} />

            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={defaultDescription} />
            <meta property="og:image" content={thumbnail} />
            <meta property="fb:app_id" content={facebook} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={defaultDescription} />
            <meta name="twitter:image:src" content={thumbnail} />
            <script type="application/ld+json">{structuredDataOrganization}</script>
            <title>{defaultTitle}</title>
            <html lang={lang} dir={dir} />
        </Helmet>
    );
};
