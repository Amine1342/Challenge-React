import products from "./products.json";
import Product from "./components/Product";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <AppFrame className="App">
      {products.map((product, index) => (
        <Product product={product} key={index}></Product>
      ))}
    </AppFrame>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
export default App;
