import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ApolloClient from 'apollo-client'; //interacting with teh graphql server and making requests for data nd storing that data locally when response comes back
import SongList from './components/SongList';

import { ApolloProvider } from 'react-apollo'; // provider of data, injects data into react

import App from './components/App';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({}); //makes assumptions about how your backend is setup

const Root = () => {
  /// wrapping router so it's better to put apollo provider on the outside
  return <ApolloProvider client={client}> 
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/new" component={SongCreate} />
      </Route>
    </Router>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
