import React from 'react';

import { Wrapper, GridWrapper, AboutIconsBox, FeaturesBox } from './styles';
import { SectionTitle, PropCard, ContentBox } from 'components/common'

import { ReactComponent as ValueIcon } from 'assets/icons/ventus-trade-wartosc.svg'
import { ReactComponent as DivIcon } from 'assets/icons/ventus-trade-dywersyfikacja.svg'
import { ReactComponent as InnoIcon } from 'assets/icons/ventus-trade-innowacja.svg'



export const About = () => {

    return (
        <Wrapper id="about" >
            <SectionTitle secondary>
                <h4>O firmie</h4>
            </SectionTitle>

            <GridWrapper>
                <ContentBox>
                    <p>Jesteśmy młodym przedsiębiorstwem, prowadzącym własną działalność od początku 2020 roku. Główną naszą motywacją są możliwości kreowane przez współczesny rynek.</p>

                    <p>W skład naszego zespołu wchodzą osoby o zróżnicowanych umiejętnościach i kompetencjach. Różnorodność ta pozwala nam na tworzenie wartości istotnej zarówno dla Nabywcy jak i Usługodawcy.</p>

                    <p>Zdywersyfikowana działalność umożliwia nam stały rozwój oraz obmyślanie i wdrażanie innowacji.</p>

                    <p>Serdecznie zapraszamy do zapoznania się z naszą Ofertą, której zakres sukcesywnie planujemy powiększać.</p>
                </ContentBox>

                <AboutIconsBox>
                    <PropCard third content="innowacja" className="first">
                        <InnoIcon />
                    </PropCard>

                    <PropCard fourth content="dywersyfikacja" className="second">
                        <DivIcon />
                    </PropCard>

                    <PropCard third content="wartość" className="third">
                        <ValueIcon />
                    </PropCard>
                </AboutIconsBox>
            </GridWrapper>
            <FeaturesBox>
                <ContentBox>
                    <SectionTitle third>
                        <h4>Innowacja</h4>
                    </SectionTitle>
                    <em>Innowacja to jedna z naszych trzech priorytetowych koncepcji, którymi kierujemy się w tworzeniu polityki naszego Przedsiębiorstwa.</em>

                    <p>Istotą naszych działań jest wprowadzanie stałych ulepszeń, obejmujących procesy oraz funkcje organizacyjne. Ważne staje się generowanie rozmaitych pomysłów, których efektem może stać się kluczowa wartość dla Nabywcy oraz Usługodawcy.</p>

                </ContentBox>

                <ContentBox secondary>
                    <SectionTitle fourth>
                        <h4>Dywersyfikacja</h4>
                    </SectionTitle>
                    <em>Dywersyfikacja to jedna z naszych trzech priorytetowych koncepcji, którymi kierujemy się w tworzeniu polityki naszego Przedsiębiorstwa.</em>
                    <p>Świadome rozdzielanie kierunków działalności umożliwia nabywanie zróżnicowanej wiedzy oraz doświadczenia, których efektem może stać się wytworzenie wyspecjalizowanych umiejętności o wzbogaconej strukturze. Dzięki temu połączeniu Nabywca jest zdolny uzyskać efekt wykraczający ponad jego dotychczasowe oczekiwania.</p>

                </ContentBox>

                <ContentBox>
                    <SectionTitle third>
                        <h4>Wartość</h4>
                    </SectionTitle>
                    <em>Wartość to jedna z naszych trzech priorytetowych koncepcji, którymi kierujemy się w tworzeniu polityki naszego Przedsiębiorstwa.</em>
                    <p>Interpretujemy ją jako zasady, którymi kierujemy się w Polityce naszego Przedsiębiorstwa, jak również istotny efekt, wywierający wpływ na doświadczenie Klienta. Fundamentem naszej filozofii jest teza, iż prawdziwą wartością jest rezultat wywierający pozytywne oddziaływanie dla każdej ze stron transakcji.</p>

                </ContentBox>
            </FeaturesBox>
        </Wrapper>


    );
};
