import { CardsContainer } from "./components/CardsContainer/";
import { Header } from "./components/Header";
import products from "./products.json";
import { useState } from "react";
import "/src/components/styles/normalizer.scss";

export const App = () => {

  const [items, setItems] = useState(0);

  return (
    <>
      <Header />
      <div className="title">
        You have choosed: {items} items
      </div>
      <div className="container">
        <CardsContainer products={products} />
      </div>
    </>
  )
};
