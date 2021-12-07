import { Container } from '../style';
import Title from '../../../components/Title';
import { useNavigate } from 'react-router';

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
                Register
              </button>
            </div>
          </form>
          <button onClick={() => navigate('/authentication')}>Back</button>
        </div>
      </Container>
    </>
  );
};

export default RegistrationPage;
