import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthRegReset/Auth';
import RegistrationPage from './pages/AuthRegReset/Registration';
import MyBetsPage from './pages/Mybets';
import BetPage from './pages/Bet';
import ResetPassword from './pages/AuthRegReset/ResetPassword';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/authentication' element={<AuthPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/mybets' element={<MyBetsPage />} />
        <Route path='/bet' element={<BetPage />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
