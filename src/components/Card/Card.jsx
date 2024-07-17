/* eslint-disable react/prop-types */
import './Card.scss';
import classNames from "classnames";
import { useState } from 'react';

export const Card = ({
  name,
  description,
  price
}) => {

  const [activity, setActivity] = useState(false );

  const clickHandler = () => {
    setActivity(prevActivity => !prevActivity)
  }
  return (
    <div
      className={classNames("card", {
        "active": activity === true
      })}
      onClick={clickHandler}
    >
      <h2
        className="card__title"
        style={{color: activity === true && "white"}}
      >
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
