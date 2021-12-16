import { CartDiv, DivSave, GameName, DivBetInfo } from './style';
import setaVerde from '../../../../images/seta-direita-verde.png';
import lixeira from '../../../../images/lixeira.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBetList, setBetList } from '../../../../store/Stock.store';
import { RootState } from '../../../../store';

const Cart = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  // const [betList, setBetList] = useState<betList>([]);

  useEffect(() => {
    if (stock.cartBetContent !== undefined) {
      let retorno = 0;

      stock.betList.forEach((bet) => {
        if (bet.gameName) {
          if (
            bet.gameName === stock.cartBetContent.gameName &&
            bet.selectedNumbers.toString() ===
              stock.cartBetContent.selectedNumbers.toString()
          ) {
            retorno += 1;
          }
        }
      });
      if (retorno === 1) {
        alert('Essa aposta já foi adicionada ao carrinho!');
      } else {
        dispatch(setBetList(stock.cartBetContent));
      }
    }
  }, [stock.cartBetContent]);

  function removeBet(gameName: string, selectedNumbers: string) {
    stock.betList.forEach((bet) => {
      if (
        gameName === bet.gameName &&
        selectedNumbers === bet.selectedNumbers.toString()
      ) {
        let newArray = [...stock.betList];
        newArray.splice(newArray.indexOf(bet), 1);
        dispatch(clearBetList([...newArray]));
      }
    });
  }

  function total() {
    let total = 0;
    stock.betList.map((bet) => {
      if (typeof bet.gamePrice === 'number') return (total += bet.gamePrice);
    });
    return total.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }

  return (
    <CartDiv>
      <h2>CART</h2>
      <ul>
        {stock.betList.length
          ? stock.betList.map((el) => {
              console.log('here: ', stock.betList);
              return (
                <li key={Math.random()}>
                  <button
                    onClick={() =>
                      removeBet(el.gameName, el.selectedNumbers.toString())
                    }
                  >
                    <img src={lixeira} alt='Save' />
                  </button>
                  <DivBetInfo color={el.gameColor}>
                    <div>
                      {el.selectedNumbers && el.selectedNumbers.join(', ')}
                    </div>
                    <div>
                      <GameName color={el.gameColor}>{el.gameName}</GameName> R${' '}
                      {el.gamePrice &&
                        el.gamePrice.toLocaleString('pt-br', {
                          minimumFractionDigits: 2,
                        })}
                    </div>
                  </DivBetInfo>
                </li>
              );
            })
          : 'Você ainda não adicionou apostas ao seu carrinho, escolha o seu jogo favorito e faça a sua aposta!'}
      </ul>
      <div>
        <h2>CART</h2>
        <h3>TOTAL: R$ {stock.betList.length ? total() : '0,00'}</h3>
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
