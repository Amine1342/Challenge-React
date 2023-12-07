import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import styled from "styled-components";
import Navbar from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <AppFrame className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/product-details/:productId"
              element={<ProductDetails />}
            />
          </Routes>
          <Routes
            exact
            render={() => <h1 style={{ color: "red" }}>Page introuvable</h1>}
          />
        </BrowserRouter>
      </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-left: 30%;
  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;

export default App;
