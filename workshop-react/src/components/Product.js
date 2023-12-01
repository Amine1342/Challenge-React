import React, { Component } from "react";
import styled from "styled-components";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product, updated: 0 };
  }

  componentDidMount() {
    console.log(
      "J'ai fini de préparer le produit " +
        this.props.product.name +
        " prix : " +
        this.state.product.price
    );
  }

  componentDidUpdate() {
    console.log("Le prix a été changé " + this.state.updated + " fois");
  }

  componentWillUnmount() {
    console.log("On m'a écrasé !");
  }

  addPrice = (e) => {
    e.preventDefault();
    return this.setState((oldState) => ({
      product: {
        ...oldState.product,
        price: Number(oldState.product.price) + 0.1,
      },
      updated: oldState.updated + 1,
    }));
  };
  render() {
    return (
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.props.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>
          <span>{this.props.product.name}</span>
          <span>{this.state.product.price.toFixed(1)} TND </span>
          {Number(this.state.product.price) > 2 ? "Yesir ghali :p" : "Ichri"}
          <button onClick={this.addPrice}>Ajouter 0.1 TND</button>
        </ProductInfoWrapper>
      </ProductFrame>
    );
  }
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 110px;
  border-radius: 25px;
  margin-left: 25px;
  margin-top: 5px;
`;

const ProductImageWrapper = styled.div`
  width: 100px;
  height: 120px;
  border-radius: 25px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
