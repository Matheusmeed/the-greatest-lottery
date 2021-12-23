import { saveUserInfo } from '@store/Stock.store';
import { setaDireitaVerdeMusgo, setaDireita } from '@images/index';
import { Notification, Title } from '@components/index';
import { Container, ErrorDiv } from '../style';
import { ImagemInvertida } from '../ForgotPass/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { createUser } from '@shared/services/user';
import { login } from '@shared/services/auth';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [errorName, setNameError] = useState(false);
  const [errorEmail, setEmailError] = useState(false);
  const [errorPass, setPassError] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;
  const passRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
  const nameRegex = /[A-Z][a-z]*/;

  function check() {
    if (email !== '' && !emailRegex.test(email)) {
      setEmailError(true);
    }
    if (pass !== '' && !passRegex.test(pass)) {
      setPassError(true);
    }
    if (name !== '' && !nameRegex.test(name)) {
      setNameError(true);
    }
  }

  useEffect(() => {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
    if (passRegex.test(pass)) {
      setPassError(false);
    }
    if (nameRegex.test(name)) {
      setNameError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, pass, name]);

  async function handleRegistration(event: { preventDefault: () => void }) {
    event?.preventDefault();

    if (!name || !pass || !email || errorEmail || errorPass || errorName) {
      Notification({
        message: 'Preencha todos os campos corretamente!',
        type: 'warning',
      });
    } else {
      const data = await createUser(email, name, pass);

      if (data) {
        const dataLogin = await login({ email: email, password: pass });
        if (dataLogin) {
          dispatch(saveUserInfo(dataLogin));
          navigate('/bet');
        }
      }
    }
  }

  return (
    <>
      <Container>
        <div>
          <Title></Title>
        </div>
        <div>
          <h1>Registration</h1>
          <form onSubmit={handleRegistration}>
            <div>
              <input
                type='text'
                placeholder='Nome'
                onChange={(el) => {
                  setName(el.target.value);
                }}
                onBlur={() => check()}
              />
            </div>
            {errorName && (
              <ErrorDiv>
                Seu nome deve iniciar com uma letra maiúscula.
              </ErrorDiv>
            )}

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
            {errorPass && (
              <ErrorDiv>
                Sua senha deve conter 6 caracteres, incluindo um número.
              </ErrorDiv>
            )}
            <div>
              <button type='submit' value='Register'>
                Register <img src={setaDireitaVerdeMusgo} alt='register' />
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/')}>
            {' '}
            <ImagemInvertida src={setaDireita} alt='back' /> Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default RegistrationPage;
