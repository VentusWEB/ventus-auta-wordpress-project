import React from 'react';
import { Wrapper, LocationContainer, MapLocation, AdressSection, AdressBox, LocationContentBox, LocationWrapper } from './styles';
import { SectionTitle, DefaultWrapper, MainWrapper } from 'components/common'

import { ContentBox } from 'components/common'


export const Location = () => {

    return (
        <MainWrapper id="location" >

            <DefaultWrapper fluid>



                <SectionTitle>
                    <h4>Lokalizacja</h4>
                </SectionTitle>
                <LocationContainer>
                    <LocationContentBox secondary>
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

                        <MapLocation />
                    </LocationContentBox>
                    <ContentBox secondary >
                        <p>Główna siedziba przedsiębiorstwa usytuowana jest w mieście Kłodzko położonym na Dolnym śląsku.</p>
                        <p>Większość procesów przedsiębiorstwa odbywa się natomiast w miejscowości Mrokocin usytuowanej przy granicy województwa opolskiego oraz dolnośląskiego.</p>

                    </ContentBox>
                </LocationContainer>

            </DefaultWrapper>
        </MainWrapper>


    );
};
