import React from 'react';

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"
import { GridMainWrapper, ReverseBox, LocationContainer, MapLocation, AdressSection, AdressBox, LocationContentBox, ContactIconsBox, ToggleableBg, GridContactInfo, ContactSectionsBox, ContactSectionWrapper, ReverseWrapper } from './styles';
import { SectionTitle, DefaultWrapper, PropCard, DefaultIcon } from 'components/common'


import { contactItems } from "constans"

import { ContentBox, PaddingWrapper } from 'components/common'
import { deviceType } from 'detect-it';


export const ContactLocation = ({ LocationData, LocationAddress, ContactData, ContactItems, ContactBrandInfo }) => {


    const icon = LocationData.map.localFile.childSvg

    const img = LocationData.map.localFile.childImageSharp

    const content = LocationData.paragraphs.fieldsList

    const title1 = LocationData.textHeader

    const title2 = ContactData.textHeader

    const id1 = LocationData.sectionTitle.replace(" ", "-").toLowerCase()

    const id2 = ContactData.sectionTitle.replace(" ", "-").toLowerCase()

    const locationOrder = LocationData.order

    const contactOrder = ContactData.order

    return (
        <  >

            <DefaultWrapper fluid id={id1} css={`{ order: ${locationOrder}; }`}>
                <SectionTitle>
                    <h4>{title1}</h4>
                </SectionTitle>
 
                <LocationContainer>

                    <LocationContentBox secondary>
                    <PaddingWrapper>
                    {img ?
                                        <MapLocation>
                                            <GatsbyImage
                                                alt={objectName}
                                                image={img.gatsbyImageData}
                                            />
                                        </MapLocation>
                                        :
                                        icon ?
                                            (<MapLocation dangerouslySetInnerHTML={{ __html: icon.content.data }} />) : null}

                        <AdressSection>

                        {Object.keys(LocationAddress).map(((keyName, i) => {

                                const objects = LocationAddress[keyName].multiBox;

                                const objectCities = objects.map((item, i) => {
                                if (item['title'] == "miasto") {
                                    return item
                                }
                                })//check for icon option just to be safe

                                const objectAddresses = objects.map((item, i) => {
                                if (item['title'] == "ulica") {
                                    return item
                                }
                                })
                                //check for content option just to be safe

                                const objectZipCodes = objects.map((item, i) => {
                                    if (item['title'] == "kod pocztowy") {
                                        return item
                                    }
                                    })
                                    //check for content option just to be safe

                                const objectCity = objectCities
                                .filter(item => item !== undefined)[0]['content']

                                const objectAddress = objectAddresses
                                .filter(item => item !== undefined)[0]['content']

                                const objectZipCode = objectZipCodes
                                .filter(item => item !== undefined)[0]['content']
                                
                                return (
                                <>
                                                            <AdressBox>
                                                                <h3>{objectCity}</h3>
                                                                <p>{objectAddress}</p>
                                                                <p>{objectZipCode}</p>
                                                            </AdressBox>
                                </>
                                )

                                }))
                                }
                        </AdressSection>

                        </PaddingWrapper>
                    </LocationContentBox>
                    <ContentBox secondary >
                        {
                            content.map(item => (<p>{item.paragraph}</p>))
                        }

                    </ContentBox>

                </LocationContainer>

            </DefaultWrapper>


            <ReverseBox css={`{ order: ${contactOrder}; }`}>
                <SectionTitle secondary css={`text-align: left;`} id={id2}>
                    <h4>{title2}</h4>
                </SectionTitle>
                <ContactSectionWrapper >
                    <ReverseWrapper fluid>
                        <ContactIconsBox>
                        {Object.keys(ContactItems).map(((keyName, i) => {

                                    const socials = ContactItems[keyName].multiBox;
                                    console.log(socials)
                                    const socialIcons = socials.map((item, i) => {
                                    if (item['type'] == "icon") {
                                        return item
                                    }
                                    })//check for icon option just to be safe

                                    const socialNames = socials.map((item, i) => {
                                    if (item['type'] == "content") {
                                        return item
                                    }
                                    })
                                    //check for content option just to be safe

                                    const socialHrefs = socials.map((item, i) => {
                                    if (item['type'] == "href") {
                                        return item
                                    }
                                    })
                                    //check for content option just to be safe

                                    const socialIcon = socialIcons
                                    .filter(item => item !== undefined)[0]
                                    console.log(socialIcon)
                                    const socialName = socialNames
                                    .filter(item => item !== undefined)[0]['content']

                                    const socialHref = socialHrefs
                                    .filter(item => item !== undefined)[0]['content']
                                    
                                    const icon = socialIcon.img?.localFile.childSvg

                                    const img = socialIcon.img?.localFile.childImageSharp

                                    const alt = socialIcon.img?.altText

                                    return (
                                    <>
                                     <a href={socialHref} title={socialName}><PropCard secondary content={socialName}>   {img
                                        ?
                                            <GatsbyImage
                                            alt={socialName}
                                            image={img.gatsbyImageData}
                                            />

                                        :

                                        icon

                                            ?

                                            <deviceType
                                            key={uuid()}
                                            href={socialHref}
                                            dangerouslySetInnerHTML={{ __html: icon.content.data }}
                                            />

                                            :

                                            <DefaultIcon
                                                className={"svg-icon"}
                                                label={keyName}
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                            />
                                        }</PropCard></a>
                                    </>
                                    )

                                    }))
                                    }

                        </ContactIconsBox>

                        <ContactSectionsBox>
                        <PaddingWrapper>
                            <ToggleableBg />
                            <GridContactInfo>

                            {Object.keys(ContactBrandInfo).map(((keyName, i) => {

                                    const objects = ContactBrandInfo[keyName].multiBox;


                                    const BrandInfo = objects.map(item => (
                                        <>
                                        <p>{item.title}</p>
                                        <h5>{item.content}</h5>
                                        </>
                                    ))

                                    return(
                                        <div>{BrandInfo}</div>
                                    )

                                    }))
                                    }
                                            
                            </GridContactInfo>
                            </PaddingWrapper>
                        </ContactSectionsBox>

                    </ReverseWrapper>



                </ContactSectionWrapper>
            </ReverseBox>

        </>


    );
};
