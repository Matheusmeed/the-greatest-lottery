import { setaDireitaVerdeMusgo, setaDireita } from '@images/index';
import { Title, Notification } from '@components/index';
import { saveUserInfo } from '@store/Stock.store';
import { login } from '@shared/services/auth';
import { Container, ErrorDiv } from '../style';
import { ForgotPass } from './style';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [errorEmail, setEmailError] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;

  function check() {
    if (email !== '' && !emailRegex.test(email)) {
      setEmailError(true);
    }
  }

  useEffect(() => {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  async function logIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (errorEmail || !pass || !email) {
      Notification({
        message: 'Você deve preencher todos os campos corretamente',
        type: 'warning',
      });
    } else {
      const data = await login({ email: email, password: pass });
      if (data) {
        dispatch(saveUserInfo(data));
        navigate('/bet');
      }
    }
  }

  return (
    <Container>
      <div>
        <Title></Title>
      </div>
      <div>
        <h1>Authentication</h1>
        <form onSubmit={logIn}>
          <div>
            <input
              type='email'
              placeholder='Email'
              onChange={(el) => {
                setEmail(el.target.value);
              }}
              onBlur={() => check()}
            />
          </div>
          {errorEmail && (
            <ErrorDiv>
              Seu email deve seguir a seguinte formatação: exemplo@exemplo.com
            </ErrorDiv>
          )}
          <div>
            <input
              type='password'
              placeholder='Password'
              onChange={(el) => {
                setPass(el.target.value);
              }}
              onBlur={() => check()}
            />
          </div>
          <div>
            <ForgotPass>
              <div onClick={() => navigate('/forgotpass')}>
                I forgot my password
              </div>
            </ForgotPass>

            <button type='submit'>
              Log In <img src={setaDireitaVerdeMusgo} alt='log-in' />
            </button>
          </div>
        </form>
        <button
          onClick={() => navigate('/registration')}
          style={{ paddingBottom: 20 }}
        >
          Sign Up <img src={setaDireita} alt='' />
        </button>
      </div>
    </Container>
  );
};

export default AuthPage;
