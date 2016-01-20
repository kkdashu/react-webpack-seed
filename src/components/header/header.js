import './header.scss';
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">主页</Link>
          </li>
          <li>
            <Link to="/users">用户</Link>
          </li>
        </ul>
      </header>
    );
  }
}
