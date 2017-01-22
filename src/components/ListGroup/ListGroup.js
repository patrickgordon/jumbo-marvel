import React from 'react';
import './ListGroup.css';

const ListGroup = (props) => {
  const { children } = props;

  return (
    <ul className="ListGroup__normal">
      {children}
    </ul>
  );
};

ListGroup.defaultProps = {
};

ListGroup.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default ListGroup;

