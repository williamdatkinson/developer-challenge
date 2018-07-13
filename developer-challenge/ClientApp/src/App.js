import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout';
import { TitleSearchBox } from './components/TitleSearchBox'; 

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/TitleSearchBox' component={TitleSearchBox} />
      </Layout>
    );
  }
}
