import "./App.css";
import LoginScreen from "./LoginAuthentication/loginScreen";
import AddProduct from "./ProductDetails/addProduct/addProduct";
import ProductDetail from "./ProductDetails/productDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const handleAddProduct = (product) => {
    // You can handle adding the product data here (e.g., send to API, update state)
    console.log("New Product:", product);
  };
  return (
    <div className="dashboard">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route
            path="/add-product"
            element={<AddProduct onAddProduct={handleAddProduct} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
