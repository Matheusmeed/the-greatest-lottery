import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 100px;
  margin-top: 50px;

  div {
    max-width: 700px;
  }

  h2 {
    margin-right: 5px;
    font-size: 1.4em;
  }

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
  margin-top: 20px;

  button {
    border-radius: 6px;
    padding: 10px;
    font-weight: bold;
  }
`;

export const AddToCartBtn = styled.button`
  background-color: #27c383;
  color: white;
  border: 1px solid #27c383;
`;

export const GameBtn = styled.button`
  margin-right: 20px;
  background: none;
  color: #27c383;
  border: 1px solid #27c383;
`;

export const GameName = styled.div`
  display: inline;
  color: ${(props) => props.color};
`;
