import Title from '../../../components/Title';
import { Container } from '../style';
import { useNavigate } from 'react-router-dom';
import setaDireitaVerde from '../../../images/seta-direita-verde-musgo.png';
import setaDireita from '../../../images/seta-direita.png';
import { ImagemInvertida } from './styles';

const ResetPassword = () => {
  const navigate = useNavigate();

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
              <input type='email' placeholder='Email' />
            </div>
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
