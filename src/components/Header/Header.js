import React from 'react';
import logo from '../../assets/marvel-logo-cropped.png';
import './Header.css';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row center-sm">
        <div className="col-xs-12">
          <div className="Header">
            <img src={logo} className="Header__logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;

