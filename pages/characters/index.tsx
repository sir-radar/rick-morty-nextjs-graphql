import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Title from '../../components/titles/title';
import PageLayout from '../../layouts/page-layout';
import graphqlClient from '../../gql/graphql-client';
import GET_CHARACTERS from '../../gql/queries/characters';
import { CharactersResponse } from '../../models/characters-interfaces';
import CharacterCard from '../../components/character-card';
import ContentContainer from '../../components/content-container';
import Pagination from '../../components/pagination';

import { HeadContext } from '../../models/head-interfaces';

const headContext: HeadContext = {
  title: 'All Characters',
  meta: [],
};

const Characters: React.FC<{ data: CharactersResponse }> = ({ data }) => {
  const { next, pages, prev, count } = data.characters.info;
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <PageLayout headContext={headContext}>
      <ContentContainer>
        <Title mb={16} align="center">
          {'Characters'}
        </Title>

        <Pagination
          count={count}
          next={next}
          prev={prev}
          pages={pages}
          router={router}
          pathname={pathname}
        />

        <CardsGrid>
          {data.characters.results.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </CardsGrid>
      </ContentContainer>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const { data } = await graphqlClient.query<Promise<CharactersResponse>>({
    query: GET_CHARACTERS,
    variables: { page: +query?.page! || 1 },
  });

  return {
    props: { data },
  };
};

const CardsGrid = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export default Characters;
