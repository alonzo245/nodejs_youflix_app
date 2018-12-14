import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    );
  }
}

export default App;
