import React from 'react';
import styled from 'styled-components';

import EpisodeResult from './episode-result';
import LocationResult from './location-result';

import { Episode } from '../../models/episode-interfaces';
import { Location } from '../../models/location-interfaces';

interface ListProp<T> {
  results: T[];
  onTitleClick?: (id: string) => void;
}

const isEpisode = (result: Episode | Location): result is Episode => {
  return 'air_date' in result;
};

const isLocation = (result: Episode | Location): result is Location => {
  return 'dimension' in result;
};

const renderList = ({
  results,
  onTitleClick,
}: ListProp<Episode | Location>) => {
  const firstResult = results[0];

  if (results.length && isEpisode(firstResult)) {
    return (
      <Container>
        {(results as Episode[]).map((result) => (
          <EpisodeResult
            key={result.id}
            result={result}
            onTitleClick={onTitleClick!}
          />
        ))}
      </Container>
    );
  }

  if (results.length && isLocation(firstResult)) {
    return (
      <Container>
        {(results as Location[]).map((result) => (
          <LocationResult key={result.id} result={result} />
        ))}
      </Container>
    );
  }

  return <Container>Loading</Container>;
};

const List = <T extends Episode | Location>({
  results,
  onTitleClick,
}: ListProp<T>) => {
  return renderList({ results, onTitleClick });
};

const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default List;
