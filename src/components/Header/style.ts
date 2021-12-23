import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
  align-items: center;
  border-bottom: 2px solid #dbdbdb;
  height: 60px;

  h1 {
    text-align: center;
    font-weight: bolder;
  }

  div {
    display: flex;
    align-items: center;
  }

  div button {
    margin: 30px;
    font-weight: bold;
    font-size: 1.1em;
    background: none;
    border: none;
    display: flex;
    align-items: center;
  }

  img {
    width: 17px;
    margin-left: 6px;
  }

  @media (max-width: 700px) {
    div button {
      margin: 8px;
    }
  }
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  height: 103%;

  h1 {
    margin: 0;
  }

  div {
    border-bottom: 4px solid #b5c401;
    height: 100%;
  }

  @media (max-width: 700px) {
    margin-left: -30px;
    margin-right: 20px;
  }
`;
