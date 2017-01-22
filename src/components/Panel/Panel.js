import React from 'react';
import './Panel.css';

const Panel = (props) => {
  const { children, title, style } = props;
  return (
    <div className="Panel__normal" style={style}>
      {title &&
      <div className="Panel__header">
        <h4 className="Panel__header__headerText">{title}</h4>
      </div>
      }

      <div className="Panel__body">
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  style: React.PropTypes.objectOf(React.PropTypes.any),
};

Panel.defaultProps = {
  children: null,
  title: '',
  style: null,
};

export default Panel;
