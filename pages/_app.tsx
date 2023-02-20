import { ApolloProvider } from '@apollo/client';
import MainLayout from '../layouts/main-layout';
import GlobalStyle from '../styles/global-styles';
import graphqlClient from '../gql/graphql-client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
