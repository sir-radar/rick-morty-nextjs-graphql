import { NextPageContext } from 'next';
import Title from '../components/titles/title';
import PageLayout from '../layouts/page-layout';

const headContext = {
  title: 'Erro page!',
  meta: [],
};

type Props = {
  statusCode: number;
};

function Error({ statusCode }: Props) {
  return (
    <PageLayout headContext={headContext}>
      <Title align="center" mt={16}>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </Title>
    </PageLayout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
