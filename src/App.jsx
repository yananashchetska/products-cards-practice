import { CardsContainer } from "./components/CardsContainer/";
import products from "./products.json";

export const App = () => (
  <CardsContainer products={ products } />
);