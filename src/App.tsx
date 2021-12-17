import 'react-notifications-component/dist/theme.css';
import { GlobalStyle } from './styles/Global';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';
import ReactNotification from 'react-notifications-component';

function App() {
  return (
    <>
      <Provider store={store}>
        <ReactNotification />
        <Routes />
      </Provider>

      <GlobalStyle />
    </>
  );
}

export default App;
