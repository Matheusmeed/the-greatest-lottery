import { CartDiv, DivSave, GameName, DivBetInfo } from './style';
import setaVerde from '../../../../images/seta-direita-verde.png';
import lixeira from '../../../../images/lixeira.png';
import { useEffect, useState } from 'react';

interface ICartProps {
  cartBetContent?: {
    selectedNumbers: number[];
    gameName: string;
    gameColor: string;
    gamePrice: number;
  };
}

interface IBetList {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

type betList = IBetList[];

const Cart = (props: ICartProps) => {
  const [betList, setBetList] = useState<betList>([]);

  useEffect(() => {
    if (props.cartBetContent !== undefined) {
      let retorno = false;
      betList.forEach((bet) => {
        if (
          bet.gameName === props.cartBetContent?.gameName &&
          bet.selectedNumbers.toString() ===
            props.cartBetContent.selectedNumbers.toString()
        ) {
          retorno = true;
        }
      });
      if (retorno) {
        alert('Essa aposta já foi adicionada ao carrinho!');
      } else {
        let betListArray = betList;
        setBetList([...betListArray, props.cartBetContent]);
      }
    }
  }, [props.cartBetContent]);

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
      return (total += bet.gamePrice);
    });
    return total.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }

  return (
    <CartDiv>
      <h2>CART</h2>
      <ul>
        {betList.length
          ? betList.map((el) => {
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
                    <div>{el.selectedNumbers.join(', ')}</div>
                    <div>
                      <GameName color={el.gameColor}>{el.gameName}</GameName> R${' '}
                      {el.gamePrice.toLocaleString('pt-br', {
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
