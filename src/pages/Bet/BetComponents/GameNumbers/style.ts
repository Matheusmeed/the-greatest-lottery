import styled from 'styled-components';

export const ButtonNumber = styled.button`
  background-color: ${(props) => props.color || '#ADC0C4'};
  color: white;
  width: 50px;
  height: 50px;
  border: none;
  margin: 5px;
  border-radius: 25px;
`;
