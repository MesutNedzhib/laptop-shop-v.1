import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ProductsScreen />
    </div>
  );
}

export default App;
