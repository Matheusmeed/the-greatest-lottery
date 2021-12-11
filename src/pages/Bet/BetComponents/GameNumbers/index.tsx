import { useEffect, useState } from 'react';
import { AddToCartBtn, ButtonNumber, GameBtn, GameBtnsDiv } from './style';

interface IGameNumbers {
  actualGameInfo: {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
  };
}

type selectedNumbersType = number[];

const GameNumbers = (props: IGameNumbers) => {
  const [selectedNumbers, setSelectedNumbers] = useState<selectedNumbersType>(
    []
  );

  let numbers: number[] = [];

  useEffect(() => {
    console.log(selectedNumbers);
  }, [selectedNumbers]);

  useEffect(() => {
    setSelectedNumbers([]);
  }, [props.actualGameInfo]);

  function renderNumbers() {
    for (let i = 1; i <= props.actualGameInfo.range; i++) {
      numbers.push(i);
    }

    function handleNumberClick(num: number) {
      if (selectedNumbers.includes(num)) {
        let newArray = selectedNumbers;
        newArray.splice(newArray.indexOf(num), 1);
        setSelectedNumbers([...newArray]);
      } else {
        if (props.actualGameInfo.max_number === selectedNumbers.length) {
          alert(`Você já escolheu ${props.actualGameInfo.max_number} números!`);
        } else {
          setSelectedNumbers((actual) => [...actual, num]);
        }
      }
    }

    return numbers.map((num) => {
      return (
        <ButtonNumber
          color={
            selectedNumbers.includes(num) ? props.actualGameInfo.color : ''
          }
          onClick={() => handleNumberClick(num)}
          key={num}
        >
          {num}
        </ButtonNumber>
      );
    });
  }

  function clearGame() {
    setSelectedNumbers([]);
  }

  function completeGame() {
    if (selectedNumbers.length === props.actualGameInfo.max_number) {
      alert(`Você já escolheu ${props.actualGameInfo.max_number} números!`);
    } else {
      let randomNumbers: number[] = [];
      let total = props.actualGameInfo.max_number - selectedNumbers.length;
      let range = props.actualGameInfo.range;

      while (randomNumbers.length < total) {
        let random = Math.floor(Math.random() * range + 1);

        if (!randomNumbers.includes(random)) {
          if (!selectedNumbers.includes(random)) {
            randomNumbers.push(random);
          }
        }
      }
      setSelectedNumbers((actual) => [...actual, ...randomNumbers]);
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
        <AddToCartBtn>Add to cart</AddToCartBtn>
      </GameBtnsDiv>
    </div>
  );
};

export default GameNumbers;
