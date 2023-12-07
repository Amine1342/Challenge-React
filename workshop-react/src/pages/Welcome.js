import React, { Component } from "react";
import styled from "styled-components";

export default class Welcome extends Component {
  render() {
    return (
      <WelcomeWrapper>
        <h1 style={{ color: "green" }}>Bienvenue dans notre boutique :)</h1>
      </WelcomeWrapper>
    );
  }
}

const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
  margin-top: 70px;
`;
