import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; //interacting with teh graphql server and making requests for data nd storing that data locally when response comes back

import { ApolloProvider } from 'react-apollo'; // provider of data, injects data into react

const Root = () => {
  return <ApolloProvider>
    <div>Lyrical</div>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
