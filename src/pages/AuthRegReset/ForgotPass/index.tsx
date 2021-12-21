import { useNavigate } from 'react-router-dom';
import { Container } from '../style';
import { ImagemInvertida } from './styles';
import { ErrorDiv } from '../style';
import { setaDireitaVerdeMusgo, setaDireita } from '@images/index';
import api from '@shared/services/api';
import { setResetToken } from '@store/Stock.store';
import { Title, Notification } from '@components/index';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
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

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (errorEmail || !email) {
      Notification({
        message: 'Preencha o seu email corretamente!',
        type: 'warning',
      });
    } else {
      api
        .post('/reset', { email: email.trim() })
        .then((res) => {
          dispatch(setResetToken(res.data.token));
          navigate('/resetpass');
        })
        .catch(() => {
          Notification({
            title: 'ERRO',
            message: 'Usuário não encontrado em nossa base de dados',
            type: 'danger',
          });
        });
    }
  }

  return (
    <>
      <Container>
        <div>
          <Title></Title>
        </div>
        <div>
          <h1>Reset password</h1>
          <form onSubmit={handleSubmit}>
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
              <button type='submit'>
                Send Link <img src={setaDireitaVerdeMusgo} alt='send link' />
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

export default ForgotPass;
