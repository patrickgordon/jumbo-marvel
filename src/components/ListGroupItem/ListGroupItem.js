import React from 'react';
import './ListGroupItem.css';

const ListGroupItem = (props) => {
  const { text, subText, linkTo } = props;

  return (
    <li className="ListGroupItem__normal">
      {linkTo ?
        <div className="ListGroupItem__container">
          <div>
            {text}
            <span className="ListGroupItem__subText">
              &nbsp; {subText}
            </span>
          </div>
          <div>
            <a href={linkTo} className="ListGroupItem__link">
              <i className="fa fa-arrow-circle-right fa-2x" />
            </a>
          </div>
        </div>
        :
        <div>
          <div>
            {text}
            <span className="ListGroupItem__subText">
              &nbsp; {subText}
            </span>
          </div>
        </div>
      }
    </li>

  );
};

ListGroupItem.defaultProps = {
  linkTo: null,
  subText: null,
};

ListGroupItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  subText: React.PropTypes.number,
  linkTo: React.PropTypes.string,
};

export default ListGroupItem;

