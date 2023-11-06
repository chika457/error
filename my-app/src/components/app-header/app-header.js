import React from 'react';
import './app-header.css';

import styled from 'styled-components';

const AppDiv = styled.div`
display:flex;
align-items: flex-end;
justify-content: space-between;
text-align: center;

h1{
  font-size: 26px;
  padding: 20px;
  cursor: pointer;
  :hover {
    color: red
  }
}

h2{
  font-size: .9rem;
  color: grey;
  padding: 20px;
}

`;

const AppHeader = ({allPost, likes}) => {
  return (
    <AppDiv>
      <h1>Bektemirow Chyngyz </h1>
      <h2>{allPost} записи, из них {likes} понравилось </h2>
    </AppDiv>
  )
}

export default AppHeader
