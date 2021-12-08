import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
  margin-right: 95px;
  margin-top: 40px;

  div button {
    background: red;
    color: #b5c401;
    font-size: 1.2em;
    border: none;
    display: inline-flex;
    align-items: center;
    background: none;
  }

  div button img {
    width: 20px;
    margin-left: 10px;
  }
`;

export const FilterGameDiv = styled.div`
  h3 {
    margin-right: 30px;
    font-weight: bold;
    font-size: 1.3em;
    display: inline;
  }

  h4 {
    margin-right: 10px;
    display: inline;
    font-weight: normal;
  }

  div {
    display: inline;
    justify-content: space-between;
  }

  div button {
    background-color: #f7f7f7;
    border: 2px solid red;
    border-radius: 20px;
    padding: 5px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: 10px;
    margin-right: 10px;
    color: red;
  }
`;

export const BetInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-top: 30px;
  height: 550px;
  width: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    background-color: #d8d8d800;
  }

  div * {
    margin: 2px;
    padding: 2px;
  }

  div {
    border-left: 5px solid red;
    padding-left: 10px;
    margin-bottom: 20px;
  }

  h5 {
    font-weight: normal;
  }
`;
