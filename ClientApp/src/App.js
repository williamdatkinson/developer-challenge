//import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
//import { Route } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router';

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import { TitleSearch } from './components/TitleSearch';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={TitleSearch} />
      </Layout>
    );
  }
}
