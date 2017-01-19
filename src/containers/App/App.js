import React from 'react';
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
                <h2>Character Viewer</h2>
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
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
