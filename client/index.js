import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ApolloClient from 'apollo-client'; //interacting with teh graphql server and making requests for data nd storing that data locally when response comes back
import SongList from './components/SongList';

import { ApolloProvider } from 'react-apollo'; // provider of data, injects data into react

import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id // o short for object, this piece of config takes every single piece of data fetched by apollo backend and runs it through this function, result used to identify the piece of data inside of apollo client
}); //makes assumptions about how your backend is setup

const Root = () => {
  /// wrapping router so it's better to put apollo provider on the outside
  return <ApolloProvider client={client}> 
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/new" component={SongCreate} />
        <Route path="songs/:id" component={SongDetail} />
      </Route>
    </Router>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
