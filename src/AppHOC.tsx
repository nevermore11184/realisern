import React, { ComponentType } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const AppHOC = <T extends {}>(WrappedComponent: ComponentType<T>) => (props: T) => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'https://graphql-pokemon.now.sh/',
  });

  const client = new ApolloClient({
    cache,
    link,
  });

  return (
    <ApolloProvider client={client}>
      <WrappedComponent {...props} />
    </ApolloProvider>
  );
};

export default AppHOC;
