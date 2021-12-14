import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-right: 100px;
  margin-top: 50px;

  div {
    max-width: 700px;
  }

  h2 {
    margin-right: 5px;
    font-size: 1.4em;
  }

  h2,
  h3 {
    display: inline;
  }

  h3 {
    font-weight: normal;
    font-size: 1.4em;
  }

  h4 {
    margin-bottom: 2px;
  }

  p {
    margin-top: 8px;
  }

  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
  }
`;

export const GameName = styled.div`
  display: inline;
  color: ${(props) => props.color};
`;
