import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  ApolloLink,
  gql
} from "@apollo/client";

const spaceXClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

spaceXClient
  .query({
    query: gql`
      {
  rockets(limit: 10) {
    id
  }
}
     `
  })
  .then(result => console.log(result));


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={spaceXClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
