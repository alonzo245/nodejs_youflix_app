import React, { Component } from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoBuilder from '../../containers/VideoBuilder/VideoBuilder';
import Header from '../../components/Header/Header';

class Layout extends Component {
  state = {
    layoutScrollToggler: false,
  }

  toggleLayotScrollHandler = () => {
    this.setState({
      layoutScrollToggler: !this.state.layoutScrollToggler
    });
  }

  render() {

    const layoutClasses = this.state.layoutScrollToggler ? 'Layout Fixed' : 'Layout';
    
    return (
      <div className={layoutClasses} >
        <Header />
        <VideoBuilder
          toggleScroll={this.toggleLayotScrollHandler} />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;