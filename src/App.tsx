import { GlobalStyle } from './styles/Global';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>

      <GlobalStyle />
    </>
  );
}

export default App;
