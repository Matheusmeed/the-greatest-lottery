import { Container } from '../style';
import Title from '../../../components/Title';
import { useNavigate } from 'react-router';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import setaDireita from '../../../images/seta-direita.png';
import { ImagemInvertida } from '../ResetPassword/styles';

const RegistrationPage = () => {
  const navigate = useNavigate();

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
              <input type='text' placeholder='Nome' />
            </div>
            <div>
              <input type='email' placeholder='Email' />
            </div>
            <div>
              <input type='password' placeholder='Password' />
            </div>
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
