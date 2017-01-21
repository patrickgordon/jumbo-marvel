import React from 'react';
import Footer from '../../components/Footer';
import logo from '../../assets/marvel-logo-cropped.png';
import './App.css';

const App = (props) => {
  return (
    <div className="app-container">
      <header>
        <div className="container-fluid">
          <div className="row center-sm">
            <div className="col-xs-12">
              <div className="App__header">
                <img src={logo} className="header__logo" alt="logo" />
                <h1>Character Viewer</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="view-container">
        <div className="container-fluid">
          {props.children}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
