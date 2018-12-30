import React, { Component } from 'react';
import Logo from '../../../src/assets/images/youflix.png';
class Post extends Component {

  render() {
    return (
      <div className="w3-container w3-card-2 w3-white w3-round w3-margin"><br />
        <img src={Logo} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ "width": "60px" }} />
        <span className="w3-right w3-opacity">
          {new Date(this.props.createdAt).toISOString()}
        </span>
        <h4>
          {this.props.creator.name}
        </h4><br />
        <hr className="w3-clear" />
        <p>
          {this.props.content}
        </p>
        <div className="w3-row-padding" style={{ "margin": "0 -16px" }}>
          <div className="w3-half">
            {/* <img src={Logo} style={{ "width": "100%" }} alt="Northern Lights" className="w3-margin-bottom" /> */}
          </div>
          <div className="w3-half">
            {/* <img src={Logo} style={{ "width": "100%" }} alt="Nature" className="w3-margin-bottom" /> */}
          </div>
        </div>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> Like</button>
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>Comment</button>
      </div>
    );
  }
}

export default Post;