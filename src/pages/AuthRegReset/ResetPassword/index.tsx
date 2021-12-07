import Title from '../../../components/Title';
import { Container } from '../style';
import { useNavigate } from 'react-router-dom';

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
                Send Link
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/authentication')}>Back</button>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
