import React from 'react';
import { GridMainWrapper, ReverseBox, LocationContainer, MapLocation, AdressSection, AdressBox, LocationContentBox, ContactIconsBox, ToggleableBg, GridContactInfo, ContactSectionsBox, ContactSectionWrapper, ReverseWrapper } from './styles';
import { SectionTitle, DefaultWrapper, PropCard } from 'components/common'


import { contactItems } from "constans"

import { ContentBox } from 'components/common'


export const ContactLocation = () => {

    return (
        <GridMainWrapper  >

            <DefaultWrapper fluid id="location">
                <SectionTitle>
                    <h4>Lokalizacja</h4>
                </SectionTitle>
                <LocationContainer>

                    <LocationContentBox secondary>
                        <MapLocation />
                        <AdressSection>
                            <AdressBox>
                                <h3>Kłodzko</h3>
                                <p>Letnia 13/16</p>
                                <p>57-300</p>
                            </AdressBox>
                            <AdressBox>
                                <h3>Mrokocin</h3>
                                <p>15</p>
                                <p>57-220</p>
                            </AdressBox>
                        </AdressSection>


                    </LocationContentBox>
                    <ContentBox secondary >
                        <p>Główna siedziba przedsiębiorstwa usytuowana jest w mieście Kłodzko położonym na Dolnym śląsku.</p>
                        <p>Większość procesów przedsiębiorstwa odbywa się natomiast w miejscowości Mrokocin usytuowanej przy granicy województwa opolskiego oraz dolnośląskiego.</p>

                    </ContentBox>
                </LocationContainer>

            </DefaultWrapper>

            <ReverseBox>
                <SectionTitle secondary css={`text-align: left;`} id="contact">
                    <h4>Kontakt</h4>
                </SectionTitle>
                <ContactSectionWrapper>
                    <ReverseWrapper fluid>
                        <ContactIconsBox>
                            {
                                contactItems.map((item, i) => (
                                    <a href={item.href} title={item.alt}><PropCard secondary content={item.content}>
                                        {item.icon}
                                    </PropCard>
                                    </a>
                                ))
                            }
                        </ContactIconsBox>
                        <ContactSectionsBox>
                            <ToggleableBg />
                            <GridContactInfo>
                                <div>
                                    <p>Nazwa pełna:</p>
                                    <h5>Ventus Trade Patrycja Skóra</h5>
                                    <p>NIP:</p>
                                    <h5>8871716875</h5>
                                    <p>Regon:</p>
                                    <h5>020805395</h5>
                                </div>
                                <div>
                                    <p>Telefon:</p>
                                    <h5>571 901 144</h5>
                                    <p>Mail:</p>
                                    <h5>auta@ventus-trade.pl</h5>
                                </div>
                            </GridContactInfo>

                        </ContactSectionsBox>
                    </ReverseWrapper>



                </ContactSectionWrapper>
            </ReverseBox>
        </GridMainWrapper>


    );
};
