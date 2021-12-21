import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import {
  AuthPage,
  RegistrationPage,
  MyBetsPage,
  BetPage,
  Account,
  ForgotPass,
  ResetPass,
} from './pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<AuthPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/mybets' element={<MyBetsPage />} />
        <Route path='/bet' element={<BetPage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/resetpass' element={<ResetPass />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
