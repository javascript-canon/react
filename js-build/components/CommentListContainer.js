import React from 'React';
import { CommentList } from './CommentList';
import $ from 'jquery';


// CommentListContainer.js
export class CommentListContainer extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] }
  }
  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/api/resources",
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this)
    });
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}