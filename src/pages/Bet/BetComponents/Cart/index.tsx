import { CartDiv, DivSave, GameName, DivBetInfo } from './style';
import setaVerde from '../../../../images/seta-direita-verde.png';
import lixeira from '../../../../images/lixeira.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

interface IBetList {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

type betList = IBetList[];

const Cart = () => {
  const stock = useSelector((state: RootState) => state.stock);
  const [betList, setBetList] = useState<betList>([]);

  useEffect(() => {
    if (stock.cartBetContent !== undefined) {
      let retorno = false;
      betList.forEach((bet) => {
        if (
          bet.gameName === stock.cartBetContent.gameName &&
          bet.selectedNumbers.toString() ===
            stock.cartBetContent.selectedNumbers.toString()
        ) {
          retorno = true;
        }
      });
      if (retorno) {
        alert('Essa aposta já foi adicionada ao carrinho!');
      } else {
        let betListArray = betList;
        setBetList([...betListArray, stock.cartBetContent]);
      }
    }
  }, [stock.cartBetContent]);

  function removeBet(gameName: string, selectedNumbers: string) {
    betList.forEach((bet) => {
      if (
        gameName === bet.gameName &&
        selectedNumbers === bet.selectedNumbers.toString()
      ) {
        let newArray = betList;
        newArray.splice(newArray.indexOf(bet), 1);
        setBetList([...newArray]);
      }
    });
  }

  function total() {
    let total = 0;
    betList.map((bet) => {
      if (typeof bet.gamePrice === 'number') return (total += bet.gamePrice);
    });
    return total.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }

  return (
    <CartDiv>
      <h2>CART</h2>
      <ul>
        {betList.length
          ? betList.map((el) => {
              console.log('here: ', betList);
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
        <h3>TOTAL: R$ {betList.length ? total() : '0,00'}</h3>
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
