import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/navbar/Navbar";
import { ProductContext } from "./context/product/ProductContext";

function App() {
  const [userProducts, setUserProducts] = useState([]);
  return (
    <>
      <ProductContext.Provider value={{ userProducts, setUserProducts }}>
        <NavBar brandName={"React-store-app"} cartItems={userProducts.length} />
        <Container>
          <Dashboard />
        </Container>
      </ProductContext.Provider>
    </>
  );
}

export default App;
