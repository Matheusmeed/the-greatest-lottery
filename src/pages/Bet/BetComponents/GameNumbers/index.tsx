import { useEffect } from 'react';
import { AddToCartBtn, ButtonNumber, GameBtn, GameBtnsDiv } from './style';
import CartImg from '../../../../images/carrinho-de-compras.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartBetContent,
  setSelectedNumbers,
} from '../../../../store/Stock.store';
import { RootState } from '../../../../store';
import { store } from 'react-notifications-component';

const GameNumbers = () => {
  let numbers: number[] = [];
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedNumbers([]));
  }, [stock.actualGameInfo, dispatch]);

  function renderNumbers() {
    for (let i = 1; i <= stock.actualGameInfo.range; i++) {
      numbers.push(i);
    }

    function handleNumberClick(num: number) {
      if (stock.selectedNumbers.includes(num)) {
        let newArray = [...stock.selectedNumbers];
        newArray.splice(newArray.indexOf(num), 1);
        dispatch(setSelectedNumbers([...newArray]));
      } else {
        if (stock.actualGameInfo.max_number === stock.selectedNumbers.length) {
          store.addNotification({
            message: `Você já escolheu ${stock.actualGameInfo.max_number} números!`,
            type: 'info',
            container: 'top-center',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 3000,
              showIcon: true,
            },
          });
        } else {
          dispatch(setSelectedNumbers([...stock.selectedNumbers, num]));
        }
      }
    }

    return numbers.map((num) => {
      return (
        <ButtonNumber
          color={
            stock.selectedNumbers.includes(num)
              ? stock.actualGameInfo.color
              : ''
          }
          onClick={() => handleNumberClick(num)}
          key={num}
        >
          {num.toString().length === 2 ? num : '0' + num}
        </ButtonNumber>
      );
    });
  }

  function clearGame() {
    dispatch(setSelectedNumbers([]));
  }

  function completeGame() {
    if (stock.selectedNumbers.length === stock.actualGameInfo.max_number) {
      store.addNotification({
        message: `Você já escolheu ${stock.actualGameInfo.max_number} números!`,
        type: 'info',
        container: 'top-center',
        insert: 'top',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
      });
    } else {
      let randomNumbers: number[] = [];
      let total =
        stock.actualGameInfo.max_number - stock.selectedNumbers.length;
      let range = stock.actualGameInfo.range;

      while (randomNumbers.length < total) {
        let random = Math.floor(Math.random() * range + 1);

        if (!randomNumbers.includes(random)) {
          if (!stock.selectedNumbers.includes(random)) {
            randomNumbers.push(random);
          }
        }
      }
      dispatch(
        setSelectedNumbers([...stock.selectedNumbers, ...randomNumbers])
      );
    }
  }

  function handleAddToCart() {
    if (stock.selectedNumbers.length < stock.actualGameInfo.max_number) {
      store.addNotification({
        message: `Você precisa escolher mais ${
          stock.actualGameInfo.max_number - stock.selectedNumbers.length
        } número(s)`,
        type: 'info',
        container: 'top-center',
        insert: 'top',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
      });
    } else {
      clearGame();
      dispatch(
        setCartBetContent({
          selectedNumbers: stock.selectedNumbers,
          gameName: stock.actualGameInfo.type,
          gameColor: stock.actualGameInfo.color,
          gamePrice: stock.actualGameInfo.price,
        })
      );
    }
  }

  return (
    <div>
      {renderNumbers()}

      <GameBtnsDiv>
        <div>
          <GameBtn onClick={() => completeGame()}>Complete Game</GameBtn>
          <GameBtn onClick={() => clearGame()}>Clear Game</GameBtn>
        </div>
        <AddToCartBtn onClick={() => handleAddToCart()}>
          <img src={CartImg} alt='cart' /> Add to cart
        </AddToCartBtn>
      </GameBtnsDiv>
    </div>
  );
};

export default GameNumbers;
