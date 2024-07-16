/* eslint-disable react/prop-types */
import './Card.scss';

export const Card = ({
  name,
  description,
  price
}) => {
  return (
    <div className="card">
      <h2 className="card__title">
        {name}
      </h2>
      <div className="card__info info">
        <p className="info__description">
          {description}
        </p>
        <div className="info__price price">
          <span className="price__label">Price</span>
          <span className="price__value">
            {price}
          </span>
        </div>
      </div>
    </div>
  )
};
