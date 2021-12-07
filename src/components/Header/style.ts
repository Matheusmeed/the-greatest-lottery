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

  div h3 {
    margin: 30px;
    font-weight: bolder;
  }
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  border-bottom: 4px solid #b5c401;
  height: 103%;

  h1 {
    margin: 0;
  }
`;
