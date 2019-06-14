import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import AppMarkdown from './page1.md';

class Page1 extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return <ReactMarkdown className="markdown-container" source={markdown} />;
  }
}
export default Page1;