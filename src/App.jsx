import { CardsContainer } from "./components/CardsContainer/";
import products from "./products.json";
import "/src/components/styles/normalizer.scss";

export const App = () => (
  <div className="container">
    <CardsContainer products={ products } />
  </div>
);