import React, {Component} from 'react';
import './Layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoBuilder from '../../containers/VideoBuilder/VideoBuilder';

class Layout extends Component {

  render(){
    
    return(
      <div className="Layout" >
        <VideoBuilder/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;