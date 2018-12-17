import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import VideoBuilder from './containers/VideoBuilder/VideoBuilder';
import About from './containers/About/About';
import './App.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter >
        <Layout togglePosition={this.props.layoutScrollToggler}>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <VideoBuilder toggleLayoutScroll={this.props.onToggleLayoutScroll} />}
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

const mapStateToProps = state => {
  return {
    layoutScrollToggler: state.app.layoutScrollToggler
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleLayoutScroll: () => dispatch(actions.toggleLayoutScroll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

