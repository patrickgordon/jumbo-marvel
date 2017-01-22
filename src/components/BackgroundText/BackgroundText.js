import React from 'react';
import './BackgroundText.css';

const BackgroundText = (props) => {
  const { text, subText } = props;
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="BackgroundText__text-container">
          <h4 className="BackgroundText__text">{text}</h4>
          {' '}
          {subText &&
          <span className="BackgroundText__sub-text">{subText}</span>
          }
        </div>
      </div>
    </div>
  );
};

BackgroundText.propTypes = {
  text: React.PropTypes.string.isRequired,
  subText: React.PropTypes.string,
};

BackgroundText.defaultProps = {
  text: '',
  subText: '',
};

export default BackgroundText;

