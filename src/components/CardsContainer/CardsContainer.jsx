import { Card } from "../Card";
import './CardsContainer.scss';
// import { useState } from "react";
/* eslint-disable react/prop-types */
export const CardsContainer = ({ products }) => {

  // const [active, setActive] = 0;

  return (
    <div className="CardsContainer">
      {products.map((product) => {
    
      
        return (
          <Card
            key={product.id}
            {...product}
          />);
      })}
    </div>
  )
};
