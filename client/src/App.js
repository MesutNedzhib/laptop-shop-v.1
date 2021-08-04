import Navbar from "./components/Navbar/Navbar";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen";
import { Route } from "react-router-dom";
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailsScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Route exact path="/" component={ProductsScreen} /> */}
      <Route path="/cart" component={CartScreen} />
      {/* <ProductDetailsScreen /> */}
      <HomeScreen />
    </div>
  );
}

export default App;
