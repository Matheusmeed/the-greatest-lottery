import Title from '../../../components/Title';
import { Container, ErrorDiv } from '../style';
import { ForgotPass } from './style';
import { useNavigate } from 'react-router';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import setaDireita from '../../../images/seta-direita.png';
import { useState } from 'react';
import api from '../../../services/api';

import { useDispatch } from 'react-redux';
import { saveUserInfo } from '../../../store/Stock.store';

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

  function isRight() {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
  }

  function logIn(e: { preventDefault: () => void }) {
    if (errorEmail || !pass || !email) {
      alert('Você deve preencher todos os campos');
    } else {
      e.preventDefault();
      api
        .post('/login', { email, password: pass })
        .then((res) => {
          dispatch(saveUserInfo(res.data));
          navigate('/bet');
        })
        .catch((err) => alert('Conta inválida...'));
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
                isRight();
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
              <div onClick={() => navigate('/resetpassword')}>
                I forgot my password
              </div>
            </ForgotPass>

            <button type='submit'>
              Log In <img src={setaDireitaVerde} alt='log-in' />
            </button>
          </div>
        </form>
        <button onClick={() => navigate('/registration')}>
          Sign Up <img src={setaDireita} alt='' />
        </button>
      </div>
    </Container>
  );
};

export default AuthPage;
