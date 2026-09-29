// import { useContext } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
// import { ProductContext } from "./context/ProductContext";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}*/}

     
    </>
  );
}

export default App;
