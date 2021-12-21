import api from '@shared/services/api';
import { Notification } from '@shared/helpers/Notification';
import { RootState } from '@store/index';
import { Modal, DivModal, Leave } from '@components/Modals/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';

interface IModalNameProps {
  setModalName: Function;
}

const ModalName = (props: IModalNameProps) => {
  const stock = useSelector((state: RootState) => state.stock);

  const [name, setName] = useState('');

  const nameRegex = /[A-Z][a-z]*/;

  function handleChangeName() {
    if (!name) {
      Notification({
        message: 'Preencha o campo para alterar o seu nome!',
        type: 'warning',
      });
    } else if (!nameRegex.test(name)) {
      Notification({
        title: 'Nome inválido',
        message: 'Seu nome deve iniciar com uma letra maiúscula.',
        type: 'warning',
      });
    } else {
      api
        .put(
          '/user/update',
          {
            email: stock.userInfo.user.email,
            name: name.trim().charAt(0).toUpperCase() + name.slice(1),
          },
          {
            headers: { Authorization: `Bearer ${stock.userInfo.token.token}` },
          }
        )
        .then(() => {
          Notification({
            title: 'Nome alterado com sucesso!',
            message:
              'Seu nome já irá aparecer atualizado quando você realizar o login novamente.',
            type: 'success',
            duration: 5000,
          });

          props.setModalName(false);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <Modal id='modal'>
      <DivModal>
        <Leave onClick={() => props.setModalName(false)}>X</Leave>
        <h2>Novo Nome</h2>
        <div>
          <input type='text' onChange={(el) => setName(el.target.value)} />
          <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
      </DivModal>
    </Modal>
  );
};

export default ModalName;
