import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
  margin-right: 95px;
  margin-top: 40px;
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

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NewBetBtn = styled.button`
  background: red;
  color: #b5c401;
  font-size: 1.2em;
  border: none;
  display: inline-flex;
  align-items: center;
  background: none;

  img {
    width: 20px;
    margin-left: 10px;
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

  h5 {
    font-weight: normal;
  }
`;

export const OwnBet = styled.div`
  border-left: 5px solid ${(props) => props.color || 'red'};
  padding-left: 10px;
  margin-bottom: 20px;

  h4 {
    color: ${(props) => props.color};
  }
`;
