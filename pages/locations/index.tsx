import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import PageLayout from '../../layouts/page-layout';
import ContentContainer from '../../components//content-container';
import List from '../../components/list';
import Pagination from '../../components/pagination';
import Title from '../../components/titles/title';

import graphqlClient from '../../gql/graphql-client';
import GET_LOCATIONS from '../../gql/queries/locations';

import { LocationsResponse } from '../../models/location-interfaces';

const headContext = {
  title: 'Episodes page',
  meta: [],
};

const Locations: React.FC<{ data: LocationsResponse }> = ({ data }) => {
  const { info, results } = data.locations;
  const { count, next, pages, prev } = info;
  const router = useRouter();

  const onTitleClick = useCallback(
    (id: string) => {
      router.push(`${router.pathname}/${id}`);
    },
    [router]
  );

  return (
    <PageLayout headContext={headContext}>
      <ContentContainer>
        <Title align="center" mb={18}>
          {'Locations'}
        </Title>

        <Pagination
          count={count}
          next={next}
          pages={pages}
          pathname={router.pathname}
          prev={prev}
          router={router}
        />
        <List results={results} onTitleClick={onTitleClick} />
      </ContentContainer>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { page },
  } = context;

  const { data } = await graphqlClient.query<Promise<LocationsResponse>>({
    query: GET_LOCATIONS,
    variables: { page: +page! || 1 },
  });

  return {
    props: { data },
  };
};

export default Locations;
