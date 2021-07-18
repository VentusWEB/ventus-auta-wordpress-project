import React from "react"



import { footerIcons, footerInfo, contactItems } from "constans"

import { FooterHeader, FooterIconsBox, FooterLogoLink, FooterBrandLogo, FooterIcon, FooterWrapper, FooterSection, FooterLink, FooterInfo, FooterInfoBox, GridBox } from './styles'


export const CustomedFooter = () => {

    return (
        <FooterWrapper>
            <FooterHeader>

            </FooterHeader>
            <FooterSection>
                <GridBox>
                    {contactItems.map((item, index) => (
                        <FooterLink
                            href={item.href}
                            key={index}
                            title={item.alt} >
                            {item.icon}{item.content}
                        </FooterLink>
                    ))}
                </GridBox>

                <GridBox>
                    <FooterLogoLink to="/">
                        <FooterBrandLogo />
                        <h3>ventus trade</h3>
                    </FooterLogoLink>
                    <p>dywersyfikacja, innowacja, wartość ...</p>
                </GridBox>
            </FooterSection>

            <FooterInfoBox>
                <FooterIconsBox>
                    {footerIcons.map((item, index) => (
                        <FooterIcon key={index} href={item.link} title={item.title}>
                            {item.icon}
                        </FooterIcon>
                    ))}
                </FooterIconsBox>
                <div>

                    {footerInfo.map((item, index) => (
                        <FooterInfo
                            to={item.link || '/'}
                            key={index} >
                            {item.title}
                        </FooterInfo>
                    ))}
                </div>
            </FooterInfoBox>



        </FooterWrapper>
    )
}

