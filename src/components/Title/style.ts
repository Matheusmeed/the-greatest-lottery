import styled from 'styled-components';

export const TitleDiv = styled.div`
  width: 200px;
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    color: white;
    background-color: #b5c401;
    font-size: 0.8em;
    border-radius: 20px;
    width: 100px;
    padding: 3px;
  }

  * {
    margin-top: 0;
  }

  @media (max-width: 700px) {
    padding-top: 10px;
    padding-bottom: 30px;
    width: 100px;
    font-size: 100%;
  }
`;
