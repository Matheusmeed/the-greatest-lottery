import Title from '../../../components/Title';
import { Container } from '../style';
import { useNavigate } from 'react-router-dom';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import setaDireita from '../../../images/seta-direita.png';
import { ImagemInvertida } from './styles';
import { ErrorDiv } from '../style';
import { useState } from 'react';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
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

  return (
    <>
      <Container>
        <div>
          <Title></Title>
        </div>
        <div>
          <h1>Authentication</h1>
          <form action=''>
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
              <button type='submit' value='Log In'>
                Send Link <img src={setaDireitaVerde} alt='send link' />
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/')}>
            {' '}
            <ImagemInvertida src={setaDireita} alt='' /> Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
