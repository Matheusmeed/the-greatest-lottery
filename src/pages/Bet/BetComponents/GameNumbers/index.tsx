import { useEffect } from 'react';
import { AddToCartBtn, ButtonNumber, GameBtn, GameBtnsDiv } from './style';
import CartImg from '../../../../images/carrinho-de-compras.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

interface IGameNumbersProps {
  setSelectedNumbers: Function;
  selectedNumbers: number[];
  setCartBetContent: Function;
}

const GameNumbers = (props: IGameNumbersProps) => {
  let numbers: number[] = [];
  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    props.setSelectedNumbers([]);
  }, [stock.actualGameInfo]);

  function renderNumbers() {
    for (let i = 1; i <= stock.actualGameInfo.range; i++) {
      numbers.push(i);
    }

    function handleNumberClick(num: number) {
      if (props.selectedNumbers.includes(num)) {
        let newArray = props.selectedNumbers;
        newArray.splice(newArray.indexOf(num), 1);
        props.setSelectedNumbers([...newArray]);
      } else {
        if (stock.actualGameInfo.max_number === props.selectedNumbers.length) {
          alert(`Você já escolheu ${stock.actualGameInfo.max_number} números!`);
        } else {
          props.setSelectedNumbers((actual: number[]) => [...actual, num]);
        }
      }
    }

    return numbers.map((num) => {
      return (
        <ButtonNumber
          color={
            props.selectedNumbers.includes(num)
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
    props.setSelectedNumbers([]);
  }

  function completeGame() {
    if (props.selectedNumbers.length === stock.actualGameInfo.max_number) {
      alert(`Você já escolheu ${stock.actualGameInfo.max_number} números!`);
    } else {
      let randomNumbers: number[] = [];
      let total =
        stock.actualGameInfo.max_number - props.selectedNumbers.length;
      let range = stock.actualGameInfo.range;

      while (randomNumbers.length < total) {
        let random = Math.floor(Math.random() * range + 1);

        if (!randomNumbers.includes(random)) {
          if (!props.selectedNumbers.includes(random)) {
            randomNumbers.push(random);
          }
        }
      }
      props.setSelectedNumbers((actual: number[]) => [
        ...actual,
        ...randomNumbers,
      ]);
    }
  }

  function handleAddToCart() {
    if (props.selectedNumbers.length < stock.actualGameInfo.max_number) {
      alert(
        `Você precisa escolher mais ${
          stock.actualGameInfo.max_number - props.selectedNumbers.length
        } número(s)`
      );
    } else {
      clearGame();
      props.setCartBetContent({
        selectedNumbers: props.selectedNumbers,
        gameName: stock.actualGameInfo.type,
        gameColor: stock.actualGameInfo.color,
        gamePrice: stock.actualGameInfo.price,
      });
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
