import { HeaderDiv } from './style';
import { HeaderTitleDiv } from './style';
import sair from '../../images/seta-direita.png';
import { useNavigate } from 'react-router';

interface IHeader {
  showHomeBtn: boolean;
}

const Header = (props: IHeader) => {
  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <HeaderTitleDiv>
        <div>
          <h1>TGL</h1>
        </div>

        {props.showHomeBtn && (
          <button
            onClick={() => {
              navigate('/mybets');
            }}
          >
            Home
          </button>
        )}
      </HeaderTitleDiv>

      <div>
        <button>Account</button>
        <button>
          Sair <img src={sair} alt='sair' />
        </button>
      </div>
    </HeaderDiv>
  );
};

export default Header;
