import React from 'react';
import './Panel.css';

const Panel = (props) => {
  const { children, title, bodyStyle } = props;
  return (
    <div className="Panel__normal">
      {title &&
      <div className="Panel__header">
        <h4 className="Panel__header__headerText">{title}</h4>
      </div>
      }

      <div className="Panel__body" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  bodyStyle: React.PropTypes.objectOf(React.PropTypes.any),
};

Panel.defaultProps = {
  children: null,
  title: '',
  bodyStyle: null,
};

export default Panel;
