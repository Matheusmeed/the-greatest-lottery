import styled from 'styled-components';

export const ButtonNumber = styled.button`
  background-color: ${(props) => props.color || '#ADC0C4'};
  color: white;
  width: 50px;
  height: 50px;
  border: none;
  margin: 5px;
  border-radius: 25px;
  transition: 0.3s linear;
`;

export const GameBtnsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;

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

  :hover {
    background-color: #00ff95;
    border-color: #00ff95;
  }
`;

export const GameBtn = styled.button`
  margin-right: 20px;
  background: none;
  color: #27c383;
  border: 1px solid #27c383;

  :hover {
    color: #00ff95;
    border-color: #00ff95;
  }
`;
