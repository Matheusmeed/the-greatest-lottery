import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 100px;
  margin-top: 50px;

  h2,
  h3 {
    display: inline;
  }

  h3 {
    font-weight: normal;
    font-size: 1.4em;
  }

  h4 {
    margin-bottom: 2px;
  }

  p {
    margin-top: 8px;
  }
`;

export const GameBtnsDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border-radius: 6px;
    padding: 10px;
    color: #27c383;
    border: 1px solid #27c383;
  }
`;

export const AddToCartBtn = styled.button`
  background-color: #27c383;
  color: white;
`;
