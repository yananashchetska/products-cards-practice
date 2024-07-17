import { useState } from "react";
import classNames from "classnames";
import { Header } from "./components/Header";
import products from "./products.json";
import "./App.scss";

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleButtonClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <Header />
      <section className="purchase-info">
        <h1 className="purchase-info__title">Welcome to our shop!</h1>

        <div className="purchase-info__result result">
          <p className="result__details">
            {selectedIndex === -1
              ? "No items were selected"
              : `You selected ${products[selectedIndex].name}`}
          </p>
          { selectedIndex !== -1 &&
            (<img
              onClick={() => handleButtonClick(selectedIndex)}
            className="result__icon"
            src="https://www.svgrepo.com/show/343068/cross-circle.svg"
            alt="cross"
          />)}
        </div>

      </section>

      <section className="CardsContainer">
        {products.map((product, index) => {
          return (
            <div
              key={product.id}
              className={classNames("card", {
                active: index === selectedIndex,
              })}
            >
              <div className="card__content">
                <div className="card__info info">
                  <h2
                    className="card__title"
                    style={{ color: index === selectedIndex && "white" }}
                  >
                    {product.name}
                  </h2>
                  <p className="info__description">{product.description}</p>
                  <div className="info__price price">
                    <span className="price__label">Price</span>
                    <span className="price__value">{product.price}</span>
                  </div>
                </div>
                <button
                onClick={() => handleButtonClick(index)}
                className="card__button"
              >
                {index === selectedIndex ? "UNSELECT" : "SELECT"}
              </button>
                
              </div>
            </div>
          );
        })}
      </section>
    </>
  );

  
};
