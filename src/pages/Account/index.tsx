import Header from '../../components/Header';
import { Container } from './styles';
import Title from '../../components/Title';
import { Info } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NotLogged from '../../components/NotLogged';
import { useState } from 'react';

const Account = () => {
  const stock = useSelector((state: RootState) => state.stock);

  const [logged, setLogged] = useState(false);

  const name = stock.userInfo.user.name;
  const email = stock.userInfo.user.email;
  const dateUnformatted = stock.userInfo.user.created_at;
  let date = new Date(dateUnformatted).toLocaleDateString();

  return (
    <>
      <Header showHomeBtn={true} />
      {!logged ? (
        <NotLogged />
      ) : (
        <Container>
          <Info>
            <div>Nome: {name}</div>
            <div>Email: {email}</div>
            <div>Conta criada em: {date}</div>
          </Info>
          <div>
            <Title />
          </div>
        </Container>
      )}
    </>
  );
};

export default Account;
