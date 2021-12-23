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
    justify-content: space-between;
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
    position: relative;
  }
`;

export const DivLinks = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 160px;
  }
`;
export const DropdownBtn = styled.button`
  display: none;
  border: none;
  background: none;
  color: #b5c401;
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;

  @media (max-width: 700px) {
    display: flex;
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
`;
