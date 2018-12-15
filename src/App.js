import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import VideoBuilder from './containers/VideoBuilder/VideoBuilder';
import About from './containers/About/About';
import './App.scss';

class App extends Component {
  state = {
    layoutScrollToggler: false,
  }

  toggleLayotScrollHandler = () => {
    this.setState({
      ...this.state,
      layoutScrollToggler: !this.state.layoutScrollToggler
    });
  }

  render() {
    return (
      <BrowserRouter >
        <Layout togglePosition={this.state.layoutScrollToggler}>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <VideoBuilder toggleScroll={this.toggleLayotScrollHandler} />}
            />
            <Route
              path='/about'
              component={About}
            />
            {this.props.children}
          </Switch>
        </Layout>
      </BrowserRouter >
    );
  }
}

export default App;
