import { passRegex, changePass, resetPass, Notification } from '@shared/index';
import { RootState } from '@store/index';
import { Modal, DivModal, Leave } from '@components/Modals/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';

interface IModalNameProps {
  setModalPass: Function;
}

const ModalPass = (props: IModalNameProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  async function handleChangePass() {
    if (!pass || !pass2) {
      Notification({
        message: 'Preencha todos os campos!',
        type: 'warning',
      });
    } else if (pass !== pass2) {
      Notification({
        message: 'As senhas estão diferentes!',
        type: 'warning',
        duration: 5000,
      });
    } else if (!passRegex.test(pass) || !passRegex.test(pass2)) {
      Notification({
        message:
          'Sua senha deve conter pelo menos 6 caracteres, incluindo um número.',
        type: 'warning',
      });
    } else {
      const token = await changePass(stock.userInfo.user.email);
      if (token) {
        const data = await resetPass(token, pass);
        if (data) {
          props.setModalPass(false);
        }
      }
    }
  }

  return (
    <Modal id='modal'>
      <DivModal>
        <Leave onClick={() => props.setModalPass(false)}>X</Leave>

        <div>
          <h3>Nova Senha</h3>
          <input type='password' onChange={(el) => setPass(el.target.value)} />
          <h3>Confirmar Nova Senha</h3>
          <input type='password' onChange={(el) => setPass2(el.target.value)} />
          <button onClick={handleChangePass}>Alterar Senha</button>
        </div>
      </DivModal>
    </Modal>
  );
};

export default ModalPass;
