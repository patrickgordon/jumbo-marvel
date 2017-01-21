import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './App.css';

const App = (props) => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
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
