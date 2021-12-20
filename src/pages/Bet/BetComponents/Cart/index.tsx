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
import api from '../../../../services/api';
import { Notification } from '../../../../components/Notification';

type gamesType = [{ id: number; numbers: number[] }];

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
        Notification({
          title: 'Erro',
          message: 'Essa aposta já foi adicionada ao carrinho!',
          type: 'danger',
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

  function handleSave() {
    if (stock.betList.length === 1) {
      Notification({
        title: 'Seu carrinho está vazio!.',
        message: 'Adicione suas apostas para poder salvá-las',
        type: 'danger',
      });
    } else {
      const games: gamesType = [{ id: 0, numbers: [] }];

      stock.betList.forEach((bet) => {
        if (bet.gameName) {
          stock.gamesInfo.types.forEach((game) => {
            if (bet.gameName === game.type) {
              games.push({ id: game.id, numbers: bet.selectedNumbers });
            }
          });
        }
      });
      games.shift();
      api
        .post(
          '/bet/new-bet',
          { games: games },
          {
            headers: { Authorization: `Bearer ${stock.userInfo.token.token}` },
          }
        )
        .then((res) => {
          Notification({
            title: '',
            message: 'Suas apostas foram salvas!',
            type: 'success',
          });
          dispatch(clearBetList([{}]));
        })
        .catch((error) =>
          error.response
            ? Notification({
                title: 'Erro',
                message: `O valor mínimo autorizado é R$${stock.gamesInfo.min_cart_value},00!`,
                type: 'danger',
              })
            : Notification({
                title: '',
                message: 'Aconteceu algum erro :(',
                type: 'danger',
              })
        );
    }
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
        <button onClick={handleSave}>
          Save <img src={setaVerde} alt='Save' />
        </button>
      </DivSave>
    </CartDiv>
  );
};

export default Cart;
