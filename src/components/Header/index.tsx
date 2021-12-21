import { setaDireita } from '../../images';
import { HeaderDiv, HeaderTitleDiv } from './style';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  clearBetList,
  removeUserInfo,
  setActualGameInfo,
} from '../../store/Stock.store';

interface IHeader {
  showHomeBtn: boolean;
}

const Header = (props: IHeader) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLeave() {
    dispatch(clearBetList([{}]));
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
              dispatch(
                setActualGameInfo({
                  id: 0,
                  type: '',
                  description: '',
                  range: 0,
                  price: 0,
                  max_number: 0,
                  color: '',
                })
              );
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
