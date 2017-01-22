import React from 'react';
import './BackgroundText.css';

const BackgroundText = (props) => {
  const { text } = props;
  return (
    <div className="row">
      <div className="col-xs-12">
        <h4 className="BackgroundText__text">{text}</h4>
      </div>
    </div>
  );
};

BackgroundText.propTypes = {
  text: React.PropTypes.string.isRequired,
};

BackgroundText.defaultProps = {
  text: '',
};

export default BackgroundText;

