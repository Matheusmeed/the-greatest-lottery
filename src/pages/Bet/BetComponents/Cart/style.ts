import styled from 'styled-components';

export const CartDiv = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #b1b1b1;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 8px;
  position: relative;

  ul {
    padding: 0;
    height: 200px;
    overflow-y: auto;
  }

  li {
    margin-bottom: 20px;
    display: flex;
  }

  div {
    display: flex;
    align-items: center;
  }

  div h2 {
    display: inline;
  }

  div h3 {
    font-size: 1.5em;
    font-weight: normal;
    margin-left: 5px;
  }

  Button {
    color: #27c383;
    background: none;
    border: none;
    font-size: 2em;
    font-weight: bold;
  }

  img {
    width: 21px;
  }
`;

export const DivSave = styled.div`
  width: 100%;
  margin-left: -10px;
  background-color: #f7f7f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  bottom: 0;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  button:hover {
    color: #00ff95;
  }
`;

export const GameName = styled.h4`
  color: ${(props) => props.color || 'pink'};
  margin: 2px;
  margin-right: 6px;
  display: inline;
`;

export const DivBetInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65px;
  border-left: 4px solid ${(props) => props.color || 'pink'};
  padding-left: 10px;

  div {
    margin-top: 4px;
  }
`;
