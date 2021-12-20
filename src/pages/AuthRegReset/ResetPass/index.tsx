import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Title from '../../../components/Title';
import { ImagemInvertida } from '../ForgotPass/styles';
import seta from '../../../images/seta-direita.png';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import { Container, ErrorDiv } from '../style';

const ResetPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const [errorPass, setPassError] = useState(false);
  const passRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;

  function check() {
    if (pass !== '' && !passRegex.test(pass)) {
      setPassError(true);
    }
  }

  useEffect(() => {
    if (passRegex.test(pass)) {
      setPassError(false);
    }
  }, [pass]);

  function handleChangePass() {}

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
                onBlur={() => check()}
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
                Change Password{' '}
                <img src={setaDireitaVerde} alt='alterar senha' />
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/forgotpass')}>
            {' '}
            <ImagemInvertida src={seta} alt='back' /> Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default ResetPass;
