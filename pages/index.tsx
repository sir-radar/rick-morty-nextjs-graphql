import React from 'react';
import styled from 'styled-components';
import CardsContainer from '../components/cards-container';
import SubTitle from '../components/titles/sub-title';
import Title from '../components/titles/title';
import { HeadContext } from '../models/head-interfaces';
import PageLayout from '../layouts/page-layout';
import { backgroundImage, headContext } from '../constants';

const Main: React.FC = () => {
  return (
    <PageLayout headContext={headContext}>
      <BackgroundWrapper backgroundImage={backgroundImage}>
        <Header>
          <Title mb={16} align="center">
            {'Rick and Morty GraphQL App'}
          </Title>
          <SubTitle align="center">
            {'What would you like to explore ??'}
          </SubTitle>
        </Header>

        <Content>
          <CardsContainer />
        </Content>
      </BackgroundWrapper>
    </PageLayout>
  );
};

const BackgroundWrapper = styled.div<{ backgroundImage: string }>`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

const Header = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`;

const Content = styled.section`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Main;
