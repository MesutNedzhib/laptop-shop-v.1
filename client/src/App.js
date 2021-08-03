import Navbar from "./components/Navbar/Navbar";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <ProductsScreen /> */}
      <CartScreen />
    </div>
  );
}

export default App;
