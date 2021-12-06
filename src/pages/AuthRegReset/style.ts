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
    background: none;
    border: none;
    font-size: 1.4em;
    font-weight: bold;
    color: #707070;
  }
`;
