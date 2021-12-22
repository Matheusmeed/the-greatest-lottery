import { setaDireitaVerdeMusgo, setaDireita } from '@images/index';
import api from '@shared/services/api';
import { RootState } from '@store/index';
import { Title, Notification } from '@components/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImagemInvertida } from '../ForgotPass/styles';
import { Container, ErrorDiv } from '../style';
import { resetPass } from '@shared/services/auth';

const ResetPass = () => {
  const navigate = useNavigate();
  const stock = useSelector((state: RootState) => state.stock);
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const [errorPass, setPassError] = useState(false);
  const [errorPass2, setPassError2] = useState(false);
  const passRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;

  function check(passNum: number) {
    if (passNum === 1) {
      if (pass !== '' && !passRegex.test(pass)) {
        setPassError(true);
      }
    }

    if (passNum === 2) {
      if (pass2 !== '' && !passRegex.test(pass2)) {
        setPassError2(true);
      }
    }
  }

  useEffect(() => {
    if (passRegex.test(pass)) {
      setPassError(false);
    }
    if (passRegex.test(pass2)) {
      setPassError2(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pass, pass2]);

  async function handleChangePass(event: { preventDefault: () => void }) {
    event?.preventDefault();
    if (!pass || !pass2) {
      Notification({
        message: 'Preencha todos os campos!',
        type: 'warning',
      });
    } else if (pass !== pass2) {
      Notification({
        message: 'As senhas estão diferentes!',
        type: 'warning',
      });
    } else if (!passRegex.test(pass)) {
      Notification({
        message:
          'Sua senha precisa ter pelo menos 6 caracteres, incluindo um número.',
        type: 'warning',
      });
    } else {
      const data = await resetPass(stock.resetToken, pass);

      if (data) {
        navigate('/');
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
          <h1>New Password</h1>
          <form onSubmit={handleChangePass}>
            <div>
              <input
                type='password'
                placeholder='Password'
                onChange={(el) => {
                  setPass(el.target.value);
                }}
                onBlur={() => check(1)}
              />
            </div>
            {errorPass && (
              <ErrorDiv>
                Sua senha deve conter 6 caracteres, incluindo um número.
              </ErrorDiv>
            )}
            <div>
              <input
                type='password'
                placeholder='Password'
                onChange={(el) => {
                  setPass2(el.target.value);
                }}
                onBlur={() => check(2)}
              />
            </div>
            {errorPass2 && (
              <ErrorDiv>
                Sua senha deve conter 6 caracteres, incluindo um número.
              </ErrorDiv>
            )}
            <div>
              <button type='submit' value='Register'>
                Change Password{' '}
                <img src={setaDireitaVerdeMusgo} alt='alterar senha' />
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/forgotpass')}>
            {' '}
            <ImagemInvertida src={setaDireita} alt='back' /> Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default ResetPass;
