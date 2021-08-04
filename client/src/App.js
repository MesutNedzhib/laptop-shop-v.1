import Navbar from "./components/Navbar/Navbar";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen";
import { Route } from "react-router-dom";
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailsScreen";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Route exact path="/" component={ProductsScreen} /> */}
      <Route path="/cart" component={CartScreen} />
      <ProductDetailsScreen />
    </div>
  );
}

export default App;
