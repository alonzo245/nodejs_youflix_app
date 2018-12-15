import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Layout>
          {this.props.children}
        </Layout>
      </BrowserRouter >
    );
  }
}

export default App;
