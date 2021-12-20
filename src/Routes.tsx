import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthRegReset/Auth';
import RegistrationPage from './pages/AuthRegReset/Registration';
import MyBetsPage from './pages/Mybets';
import BetPage from './pages/Bet';
import ForgotPass from './pages/AuthRegReset/ForgotPass';
import Account from './pages/Account';
import ResetPass from './pages/AuthRegReset/ResetPass';

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
