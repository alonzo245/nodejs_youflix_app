import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import VideoBuilder from './containers/VideoBuilder/VideoBuilder';
import About from './containers/About/About';
import Signup from './containers/Signup/Signup';
import Logout from './containers/Auth/Logout/Logout';
import './App.scss';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Route path="/signup" component={Signup} />
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Route path="/logout" component={Logout} />
      );
    }
    return (
      <BrowserRouter >
        <Layout
          isAuth={this.props.isAuthenticated}
          togglePosition={this.props.layoutScrollToggler}
        >
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
            {routes}
            {this.props.children}
          </Switch>
        </Layout>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = state => {
  return {
    layoutScrollToggler: state.app.layoutScrollToggler,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleLayoutScroll: () => dispatch(actions.toggleLayoutScroll()),
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

