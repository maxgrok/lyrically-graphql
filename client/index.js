import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ApolloClient from 'apollo-client'; //interacting with teh graphql server and making requests for data nd storing that data locally when response comes back
import SongList from './components/SongList';

import { ApolloProvider } from 'react-apollo'; // provider of data, injects data into react


const client = new ApolloClient({}); //makes assumptions about how your backend is setup

const Root = () => {
  return <ApolloProvider client={client}> 
    <SongList />
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
