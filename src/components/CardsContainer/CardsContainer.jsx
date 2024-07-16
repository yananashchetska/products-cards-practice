import { Card } from "../Card";
import './CardsContainer.scss';

/* eslint-disable react/prop-types */
export const CardsContainer = ({ products }) => (
  <div className="CardsContainer">
    {products.map((product) => {
      return <Card key={product.id} {...product} />;
    })}
  </div>
);
