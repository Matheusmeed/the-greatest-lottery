import Title from '../../../components/Title';
import { Container } from '../style';
import { ForgotPass } from './style';
import { useNavigate } from 'react-router';

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Title></Title>
      </div>
      <div>
        <h1>Authentication</h1>
        <form action=''>
          <div>
            <input type='email' placeholder='Email' />
          </div>
          <div>
            <input type='password' placeholder='Password' />
          </div>
          <div>
            <ForgotPass>
              <div onClick={() => navigate('/resetpassword')}>
                I forgot my password
              </div>
            </ForgotPass>

            <button type='submit' value='Log In'>
              Log In
            </button>
          </div>
        </form>
        <button onClick={() => navigate('/registration')}>Sign Up</button>
      </div>
    </Container>
  );
};

export default AuthPage;
