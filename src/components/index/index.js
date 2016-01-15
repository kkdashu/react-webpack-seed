import './index.scss';
import React from 'react';
import Header from '../header/header';
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
