import React, { Component } from "react";
import styled from "styled-components";
import products from "../products.json";
import Product from "../components/Product";

export default class Products extends Component {
  render() {
    return (
      <ProductWrapper>
        {products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  text-align: center;
  display: flex;
`;
