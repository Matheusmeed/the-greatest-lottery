import Header from '../../components/Header';
import { Container } from './styles';
import Title from '../../components/Title';
import { Info } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NotLogged from '../../components/NotLogged';
import { useEffect, useState } from 'react';
import ModalName from '../../components/Modals/ModalName';
import ModalPass from '../../components/Modals/ModalPass';

const Account = () => {
  const stock = useSelector((state: RootState) => state.stock);

  const [logged, setLogged] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [modalPass, setModalPass] = useState(false);

  const name = stock.userInfo.user.name;
  const email = stock.userInfo.user.email;
  const dateUnformatted = stock.userInfo.user.created_at;
  let date = new Date(dateUnformatted).toLocaleDateString();

  useEffect(() => {
    stock.userInfo.token.token ? setLogged(true) : setLogged(false);
  }, [stock]);

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
