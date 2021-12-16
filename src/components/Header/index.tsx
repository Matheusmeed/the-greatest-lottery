import { HeaderDiv } from './style';
import { HeaderTitleDiv } from './style';
import sair from '../../images/seta-direita.png';
import { useNavigate } from 'react-router';
import { removeUserInfo } from '../../store/Stock.store';
import { useDispatch } from 'react-redux';

interface IHeader {
  showHomeBtn: boolean;
}

const Header = (props: IHeader) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLeave() {
    dispatch(removeUserInfo());
    navigate('/');
  }

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
        <button onClick={() => navigate('/account')}>Account</button>
        <button onClick={handleLeave}>
          Sair <img src={sair} alt='sair' />
        </button>
      </div>
    </HeaderDiv>
  );
};

export default Header;
