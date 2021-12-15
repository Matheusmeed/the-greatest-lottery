import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-left: 5px;
  margin-right: 5px;

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
  height: 115px;
  border: 2px solid #b5c401;
  box-shadow: 1px 1px 1px 1px #b5c401;

  div {
    margin: 10px;
  }
`;
