import { CartDiv, DivSave, GameName, DivBetInfo } from './style';
import setaVerde from '../../../../images/seta-direita-verde.png';
import lixeira from '../../../../images/lixeira.png';

const Cart = () => {
  return (
    <CartDiv>
      <h2>CART</h2>
      <ul>
        <li>
          <button>
            <img src={lixeira} alt='Save' />
          </button>
          <DivBetInfo>
            <div>dsadsa 2fdas fd37</div>
            <div>
              <GameName>Lotofácil</GameName> R$ 7,50
            </div>
          </DivBetInfo>
        </li>
        <li>
          <button>
            <img src={lixeira} alt='Save' />
          </button>
          <DivBetInfo>
            <div>dsadsa 2fdas fd37</div>
            <div>
              <GameName>Lotofácil</GameName> R$ 7,50
            </div>
          </DivBetInfo>
        </li>
        <li>
          <button>
            <img src={lixeira} alt='Save' />
          </button>
          <DivBetInfo>
            <div>dsadsa 2fdas fd37</div>
            <div>
              <GameName>Lotofácil</GameName> R$ 7,50
            </div>
          </DivBetInfo>
        </li>
        <li>
          <button>
            <img src={lixeira} alt='Save' />
          </button>
          <DivBetInfo>
            <div>dsadsa 2fdas fd37</div>
            <div>
              <GameName>Lotofácil</GameName> R$ 7,50
            </div>
          </DivBetInfo>
        </li>
        <li>
          <button>
            <img src={lixeira} alt='Save' />
          </button>
          <DivBetInfo>
            <div>dsadsa 2fdas fd37</div>
            <div>
              <GameName>Lotofácil</GameName> R$ 7,50
            </div>
          </DivBetInfo>
        </li>
      </ul>
      <div>
        <h2>CART</h2>
        <h3>TOTAL: R$ 7,00</h3>
      </div>
      <DivSave>
        <button>
          Save <img src={setaVerde} alt='Save' />
        </button>
      </DivSave>
    </CartDiv>
  );
};

export default Cart;
