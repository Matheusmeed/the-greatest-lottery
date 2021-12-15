import { Link } from 'react-router-dom';

const NotLogged = () => {
  return (
    <div>
      <h2>
        Você precisa entrar na sua conta para acessar o conteúdo dessa página!
      </h2>
      <h4>
        Clique <Link to={'/'}>aqui</Link> para fazer login
      </h4>
    </div>
  );
};

export default NotLogged;
