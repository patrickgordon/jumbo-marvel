import React from 'react';
import Link from 'react-router/lib/Link';
import './Card.css';

const Card = (props) => {
  const { children, title, style, linkTo, image } = props;
  return (
    <div className="Card" style={style}>
      <div className="Card__image-container">
        <img className="Card__image" src={image} alt={title} />
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
            <Link className="Card__link-container__link" to={linkTo}>View details</Link>
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
  linkTo: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
};

Card.defaultProps = {
  children: null,
  title: '',
  style: null,
  linkTo: '',
  string: '',
};

export default Card;

