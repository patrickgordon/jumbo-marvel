import React from 'react';
import Link from 'react-router/lib/Link';
import logo from '../../assets/marvel-logo-cropped.png';
import './Header.css';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row center-sm">
        <div className="col-xs-12">
          <div className="Header">
            <Link to="/"><img src={logo} className="Header__logo" alt="logo" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;

