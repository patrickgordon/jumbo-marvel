import React from 'react';
import Link from 'react-router/lib/Link';
import deadpool from './deadpool.jpg';
import './Card.css';

const Card = (props) => {
  const { children, title, style } = props;
  return (
    <div className="Card" style={style}>
      <div className="Card__image-container">
        <img className="Card__image" src={deadpool} alt="house" />
        {title &&
        <div className="Card__header">
          <h4 className="Card__header__header-text">{title}</h4>
        </div>
        }
      </div>

      {children &&
      <div className="Card__body">
        {children}
      </div>
      }

      <div className="Card__actions-container">
        <ul className="Card__actions-container__actions">
          <li className="Card__link-container">
            <Link className="Card__link-container__link" to="/characters/1">View details</Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

Card.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  style: React.PropTypes.objectOf(React.PropTypes.any),
};

Card.defaultProps = {
  children: null,
  title: '',
  style: null,
};

export default Card;

