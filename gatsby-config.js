const config = require("./src/data/config");

require("dotenv").config({
	path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
		locationAdressRoute: config.locationAdressRoute,
		siteUrl: process.env.SITE_URL,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: process.env.SITE_URL,
			},
		},
		/* {
			resolve: `gatsby-plugin-sitemap`,
			options: {
				query: `{
				site {
					siteMetadata {
					  siteUrl
					}
				  }
				  allSitePage {
					edges {
					  node {
						path
					  }
					}
				  }
			  }`,
				serialize: ({ site, allSitePage }) => {
					let pages = []
					allSitePage.edges.map(edge => {
						pages.push({
							url: site.siteMetadata.siteUrl + edge.node.path,
							changefreq: `daily`,
							priority: 0.7,
						})
					})
					return pages
				},
			},
		}, */

		/* 		{
					resolve: "gatsby-source-graphql",
					options: {
						typeName: "GitHub",
						fieldName: "github",
						url: "https://api.github.com/graphql",
						headers: {
							Authorization: `bearer ${process.env.PORTFOLIO_GITHUB_TOKEN}`,
						},
						fetchOptions: {},
					},
				}, */
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.defaultTitle,
				short_name: "starter",
				start_url: "/",
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icon: "./static/favicon/favicon-512.png",
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `itemsData`,
				path: `./itemsData/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		'gatsby-plugin-sitemap',
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ventus Trade Auta`,
				short_name: `VT Auta`,
				start_url: `/`,
				background_color: `#1409a0`,
				theme_color: `#1409a0`,
				display: `minimal-ui`,
				icon: `src/images/ventus-trade-logo.png`, // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-svgr',
		{
			resolve: "gatsby-plugin-anchor-links",
			/* 			options: {
							offset: -100
						} */
		},
		/*  {
		   resolve: `gatsby-plugin-cookie-though`,
		   options: {
			 config: {
			   policies: [
				 {
				   id: "essential",
				   label: "Niezbędne ciasteczka",
				   description:
					 "Są one konieczne do właściwego funkcjonowania witryny internetowej.",
				   category: "essential",
				 },
				 {
				   id: "functional",
				   label: "Funkcjonalne ciasteczka",
				   category: "functional",
				   description:
					 "Pomagają nam w sprawdzaniu efektywności wdrażanych przez nas działań marketingowych, dostosowując je do indywidualnych preferencji użytkownika.",
				 },
				 {
				   id: "statistics",
				   label: "Analityczne ciasteczka",
				   category: "statistics",
				   description:
					 "Dzięki nim możemy dowiedzieć się, co cieszy się największym zainteresowaniem na naszych podstronach.",
				 },
				 {
				   id: "social",
				   label: "Społecznościowe ciasteczka",
				   category: "social",
				   description:
					 "Wykorzystujemy je w celu poprawienia efektywności podejmowanych przez nas działań marketingowych.",
				 },
			   ],
			   permissionLabels: {
				 accept: "Zaakceptuj",
				 acceptAll: "Zaakceptuj wszystkie",
				 decline: "Odrzuć",
			   },
			   cookiePreferenceKey: "cookie-preferences",
			   header: {
				 title: "Ciasteczka?",
				 subTitle: "Znowu to okienko...",
				 description:
				   "Każdy z pewnością chce pokazać się od jak najlepszej strony, również i my. Wykorzystanie ciasteczek daje nam na to gwarancję.",
			   },
			   cookiePolicy: {
				 url: "http://localhost:8000/polityka-prywatnosci",
				 label: "Przeczytaj całą deklarację",
			   },
			 },
		   },
		 }, */
		/*     {
			  resolve: `gatsby-plugin-sitemap`,
			  options: {
				output: `/sitemap.xml`,
			  }
			}, */
		'gatsby-plugin-robots-txt',
		`gatsby-plugin-polyfill-io`,
		`gatsby-plugin-preact`,
		{
			resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
			options: {
				devMode: true,
			},
		},
		"gatsby-plugin-offline",
	],
};
