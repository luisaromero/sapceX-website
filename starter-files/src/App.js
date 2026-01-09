import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from "@apollo/client/react";
import Routing from './routes/index';

const httpLink = new HttpLink({
    uri: 'https://spacex-production.up.railway.app/',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});


const App = () => (
    <ApolloProvider client={client}>
        <Routing />
    </ApolloProvider>
);

export default App;

