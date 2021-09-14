import React from 'react';

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"

import { Wrapper, GridWrapper, AboutIconsBox, FeaturesBox } from './styles';
import { SectionTitle, PropCard, ContentBox } from 'components/common'

export const About = ({ AboutData, AboutFeatures }) => {

    const order = AboutData.order

    const title = AboutData.textHeader

    const id = AboutData.sectionTitle.replace(" ", "-").toLowerCase()

    const content = AboutData.paragraphs.fieldsList

    return (
        <Wrapper id={id} css={`{ order: ${order}; }`}  >
            <SectionTitle secondary>
                <h4>{title}</h4>
            </SectionTitle>

            <GridWrapper>
                <ContentBox>

                        {
                            content.map(( item, i ) => ( (i==content.length-1) ? 
                            (<em>{item.paragraph}</em>)
                            :
                            (<p>{item.paragraph}</p>)
                            ))
                        }
                </ContentBox>

                <AboutIconsBox>

                {Object.keys(AboutFeatures).map(((keyName, i) => {

                                                const objects = AboutFeatures[keyName].multiBox;

                                                const objectTitles = objects.map((item) => {
                                                if (item['type'] == "title") {
                                                    return item
                                                }
                                                })
                                                //check for content option just to be safe

                                                const objectIcons = objects.map((item) => {
                                                    if (item['type'] == "icon") {
                                                        return item
                                                    }
                                                })//check for icon option just to be safe


                                                const objectTitle = objectTitles
                                                .filter(item => item !== undefined)[0]['content']

                                                const objectIcon = objectIcons
                                                .filter(item => item !== undefined)[0]


                                                const icon = objectIcon.img?.localFile.childSvg

                                                const img = objectIcon.img?.localFile.childImageSharp

                                                const alt = objectIcon.img?.altText

                                                const even = i%2==0 ? true : false

                                                const odd = i%2==0 ? false : true

                                                return (
                                                <>

                                                                <PropCard fourth={even} third={odd} content={objectTitle} className={`item-${i}`} key={uuid()}>
                                                                                    {img
                                                                                        ?
                                                                                            <GatsbyImage
                                                                                            alt={alt ? alt : objectName}
                                                                                            image={img.gatsbyImageData}
                                                                                            />

                                                                                        :

                                                                                        icon

                                                                                            ?

                                                                                            <div
                                                                                            dangerouslySetInnerHTML={{ __html: icon.content.data }}
                                                                                            />

                                                                                            :

                                                                                            null
                                                                                        }
                                                                </PropCard>

                                                </>
                                                )

                                                }))
                                                }

                </AboutIconsBox>
            </GridWrapper>
            <FeaturesBox>

                        {Object.keys(AboutFeatures).map(((keyName, i) => {

                                const objects = AboutFeatures[keyName].multiBox;

                                const objectTitles = objects.map((item) => {
                                if (item['type'] == "title") {
                                    return item
                                }
                                })
                                //check for content option just to be safe

                                const objectMottos = objects.map((item) => {
                                if (item['type'] == "motto") {
                                    return item
                                }
                                })
                                //check for content option just to be safe

                                const objectDescs = objects.map((item, i) => {
                                    if (item['type'] == "desc") {
                                        return item
                                    }
                                })
                                //check for content option just to be safe

                                const objectTitle = objectTitles
                                .filter(item => item !== undefined)[0]['content']

                                const objectMotto = objectMottos
                                .filter(item => item !== undefined)[0]['content']

                                const objectDesc = objectDescs
                                .filter(item => item !== undefined)[0]['content']

                                const even = i%2==0 ? true : false

                                const odd = i%2==0 ? false : true

                                return (
                                <>

                                                <ContentBox secondary={odd}>
                                                    <SectionTitle fourth={odd} third={even}>
                                                        <h4>{objectTitle}</h4>
                                                    </SectionTitle >
                                                        <em>{objectMotto}</em>
                                                        <p>{objectDesc}</p>
                                                    </ContentBox>

                                </>
                                )

                                }))
                                }
            </FeaturesBox>
        </Wrapper>


    );
};
