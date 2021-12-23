import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-left: 5px;
  margin-right: 5px;
  overflow-y: hidden;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    max-width: 300px;

    div {
      margin-top: 20px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 10px;
  border: 2px solid #b5c401;
  box-shadow: 1px 1px 1px 1px #b5c401;
  height: 170px;

  div {
    margin: 10px;
  }

  button {
    color: white;
    font-weight: bold;
    background-color: #b5c401;
    border: none;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 20px;
  }
`;
