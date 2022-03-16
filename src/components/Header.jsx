import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <div>
          <h1>Header</h1>
          <p className='testP'>Här ska det vara en header!</p>
      </div>
    )
  }
}

export default Header;