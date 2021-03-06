import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  height: 100vh;

  * {
    font-style: italic;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #b1b1b1;
  }

  form div input {
    width: 80%;
    overflow: hidden;
    padding: 10px;
    outline: none;
    border: none;
    margin-top: 10px;
    border-bottom: 2px solid #dbdbdb;
    padding: 20px;
  }

  form div button {
    background: none;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    color: #b5c401;
    font-size: 1.4em;
    font-weight: bold;
  }

  div button {
    margin-top: 10px;
    width: 100%;
    background: none;
    border: none;
    font-size: 1.4em;
    font-weight: bold;
    color: #707070;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 20px;
    margin-left: 9px;
    margin-right: 9px;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
  }
`;

export const ErrorDiv = styled.div`
  background-color: #ff5959;
  padding: 4px;
  margin-top: -3px;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: start;
`;
