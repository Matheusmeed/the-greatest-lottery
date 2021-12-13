import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const GameButton = styled.button`
  margin-right: 20px;
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) => (props.color ? 'white' : props.theme)};
  border: 2px solid ${(props) => (props.color ? props.color : props.theme)};
  border-radius: 20px;
  padding: 4px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  transition: ease-in 0.1s;

  :hover {
    background-color: ${(props) => props.color + '99'};
    color: white;
  }
`;
