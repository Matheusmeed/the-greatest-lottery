import api from '@shared/services/api';
import { Notification } from '@shared/helpers/Notification';
import { RootState } from '@store/index';
import { Modal, DivModal, Leave } from '@components/Modals/index';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName } from '@store/Stock.store';
import { updateUser } from '@shared/services/user';

interface IModalNameProps {
  setModalName: Function;
}

const ModalName = (props: IModalNameProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const nameRegex = /[A-Z][a-z]*/;

  async function handleChangeName() {
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
      const data = await updateUser(stock.userInfo.user.email, name);

      if (data !== undefined) {
        dispatch(changeUserName(data));
        props.setModalName(false);
      }
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
