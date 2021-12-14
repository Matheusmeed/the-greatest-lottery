import { Container, ErrorDiv } from '../style';
import Title from '../../../components/Title';
import { useNavigate } from 'react-router';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import setaDireita from '../../../images/seta-direita.png';
import { ImagemInvertida } from '../ResetPassword/styles';
import { useState } from 'react';

const RegistrationPage = () => {
  const navigate = useNavigate();
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

  function isRight() {
    if (emailRegex.test(email)) {
      setEmailError(false);
    }
    if (passRegex.test(pass)) {
      setPassError(false);
    }
    if (nameRegex.test(name)) {
      setNameError(false);
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
          <form action=''>
            <div>
              <input
                type='text'
                placeholder='Nome'
                onChange={(el) => {
                  setName(el.target.value);
                  isRight();
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
                  isRight();
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
                Register <img src={setaDireitaVerde} alt='register' />
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
