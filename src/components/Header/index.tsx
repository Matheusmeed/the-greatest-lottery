import { setaDireita } from '@images/index';
import {
  clearBetList,
  removeUserInfo,
  setSelectedGames,
} from '@store/Stock.store';
import { HeaderDiv, HeaderTitleDiv } from './style';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

interface IHeader {
  showHomeBtn: boolean;
}

const Header = (props: IHeader) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLeave() {
    dispatch(clearBetList([{}]));
    dispatch(removeUserInfo());
    localStorage.removeItem('token');
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
              dispatch(setSelectedGames([]));
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
          Sair <img src={setaDireita} alt='sair' />
        </button>
      </div>
    </HeaderDiv>
  );
};

export default Header;
