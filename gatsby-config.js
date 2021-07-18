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
