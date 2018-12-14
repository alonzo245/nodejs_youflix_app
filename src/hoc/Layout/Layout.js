import React, {Component} from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoBuilder from '../../containers/VideoBuilder/VideoBuilder';
import Header from '../../components/Header/Header';

class Layout extends Component {

  render(){
    
    return(
      <div className="Layout" >
        <Header />
        <VideoBuilder/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;