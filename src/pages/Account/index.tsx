import { RootState } from '@store/index';
import {
  ModalPass,
  ModalName,
  NotLogged,
  Title,
  Header,
} from '@components/index';
import { formatDate } from '@shared/helpers/Functions';
import { useEffect, useState } from 'react';
import { Container, Info } from './styles';
import { useSelector } from 'react-redux';

const Account = () => {
  const stock = useSelector((state: RootState) => state.stock);

  const [logged, setLogged] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [modalPass, setModalPass] = useState(false);
  const [loading, setLoading] = useState(true);

  const name = stock.userInfo.user.name;
  const email = stock.userInfo.user.email;
  const dateUnformatted = stock.userInfo.user.created_at;
  let date = formatDate(dateUnformatted);

  useEffect(() => {
    stock.userInfo.token.token ? setLogged(true) : setLogged(false);
    setLoading(false);
  }, [stock]);

  return (
    <>
      <Header showHomeBtn={true} />

      {loading && <h5>Loading...</h5>}
      {!loading && !logged && <NotLogged />}

      {!loading && logged && (
        <Container>
          <Info>
            <div>Nome: {name}</div>
            <div>Email: {email}</div>
            <div>Conta criada em: {date}</div>

            <div>
              <button onClick={() => setModalName(true)}>Alterar nome</button>
              <button onClick={() => setModalPass(true)}>Alterar senha</button>
            </div>
          </Info>
          <div>
            <Title />
          </div>
        </Container>
      )}
      {modalName && <ModalName setModalName={setModalName} />}
      {modalPass && <ModalPass setModalPass={setModalPass} />}
    </>
  );
};

export default Account;
