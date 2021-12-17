import { CartDiv, DivSave, GameName, DivBetInfo } from './style';
import setaVerde from '../../../../images/seta-direita-verde.png';
import lixeira from '../../../../images/lixeira.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearBetList,
  clearCartBetContent,
  setBetList,
} from '../../../../store/Stock.store';
import { RootState } from '../../../../store';
import { store } from 'react-notifications-component';

const Cart = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stock.cartBetContent !== undefined && stock.cartBetContent.gameName) {
      let retorno = false;

      stock.betList.forEach((bet) => {
        if (bet.gameName) {
          if (
            bet.gameName === stock.cartBetContent.gameName &&
            bet.selectedNumbers.toString() ===
              stock.cartBetContent.selectedNumbers.toString()
          ) {
            retorno = true;
          }
        }
        dispatch(clearCartBetContent());
      });
      if (retorno) {
        store.addNotification({
          title: 'ERRO',
          message: 'Essa aposta já foi adicionada ao carrinho!',
          type: 'danger',
          container: 'top-center',
          insert: 'top',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 4000,
            showIcon: true,
          },
        });
      } else {
        dispatch(setBetList(stock.cartBetContent));
      }
    }
  }, [stock.cartBetContent, stock.betList, dispatch]);

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
      if (typeof bet.gamePrice === 'number') {
        return (total += bet.gamePrice);
      } else {
        return '';
      }
    });
    return total.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }

  return (
    <CartDiv>
      <h2>CART</h2>
      <ul>
        {stock.betList.length > 1
          ? stock.betList.map((el) => {
              if (el.gameName) {
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
                        <GameName color={el.gameColor}>{el.gameName}</GameName>{' '}
                        R${' '}
                        {el.gamePrice &&
                          el.gamePrice.toLocaleString('pt-br', {
                            minimumFractionDigits: 2,
                          })}
                      </div>
                    </DivBetInfo>
                  </li>
                );
              }
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
