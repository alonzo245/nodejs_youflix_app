import React, { Component } from 'react';
import axios from '../../axios';
import './Social.scss';
import WritePost from '../../components/WritePost/WritePost';
import Post from '../../components/Post/Post';
import Spinner from '../../components/UI/Spinner/Spinner';

class Social extends Component {
  state = {
    posts: [],
    totalPosts: 0,
    updatePosts: false
  }


  handleUpdatePosts = () => {
    console.log('this.state.updatePosts', this.state.updatePosts)
    this.updatePosts()
  }

  updatePosts() {
    console.log('sss')
    const token = localStorage.getItem('token');
    if (token) {
      const url = "http://localhost:8000/feed/posts";
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      }
      axios.get(url, null, headers)
        .then(res => {

          this.setState({
            ...this.state,
            posts: res.data.posts,
            totlaPosts: res.data.totlaItems
          })
          console.log(res.data.posts[0])
        })
        .catch(err => {
          console.log('err', err)
        });
    }
  }
  componentDidMount() {
    this.updatePosts()
  }

  render() {
    { const ddd = this.state.updatePosts ? null : null }
    if (!this.state.posts.length) {
      return (
        <div className="Social">
          <WritePost />
          <Spinner />
        </div>
      );
    }
    else {
      return (
        <div className="Social">
          <WritePost updatePosts={this.handleUpdatePosts} />
          {this.state.posts.map((post, index) => {
            return <Post
              key={index}
              createdAt={post.createdAt}
              content={post.content}
              comments={post.comments}
              creator={post.creator}
            />
          })}
        </div>
      )
    }
  }
};

export default Social;