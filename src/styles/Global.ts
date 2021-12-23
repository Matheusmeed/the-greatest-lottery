import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');

  body {
    background: #f7f7f7;
    margin: 0;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    overflow-x: hidden;
  }

  color {
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  *::-webkit-scrollbar {
    width: 6px;         
  }

  *::-webkit-scrollbar-thumb {
    background-color: #B5C401;   
    border-radius: 20px;       
  }

  * {
    font-style: italic;
    color: #707070;
  }

  @media (max-width: 700px) {
    

    html {
      font-size: 82%;
    }


}


  
`;
