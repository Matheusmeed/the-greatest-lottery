import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
`;

export const DivModal = styled.div`
  width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 200px;
    margin-bottom: 10px;
    text-align: center;
  }

  button {
    width: 120px;
    background-color: black;
    color: white;
    font-weight: bold;
    border-radius: 3px;
    padding: 5px;
    border: none;
    margin-top: 20px;
  }
`;

export const Leave = styled.div`
  font-size: 1.4em;
  color: red;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 14px;
  margin-right: 15px;
  cursor: pointer;
`;
