// CommentList.js
import React from 'React';
import { render } from 'react-dom'

export class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  // render() {
  //   return <ul> {this.props.comments.map(renderComment)} </ul>;
  // }
  render() {
  // I changed map(renderComment) to map(this.renderComment)
    return <ul>{this.props.comments.map(this.renderComment)}</ul>;
  }
  renderComment({body, author}) {
    return <li>{author}</li>;
  }
}