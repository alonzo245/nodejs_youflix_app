import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import VideoBuilder from './containers/VideoBuilder/VideoBuilder';
import About from './containers/About/About';
import './App.scss';

class App extends Component {
  // state = {
  //   layoutScrollToggler: false,
  // }

  // toggleLayotScrollHandler = () => {
  //   this.setState({
  //     ...this.state,
  //     layoutScrollToggler: !this.props.layoutScrollToggler
  //   });
  // }

  render() {
    console.log(this.props.layoutScrollToggler)
    return (
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

