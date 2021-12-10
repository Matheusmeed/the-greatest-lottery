import { useEffect, useState } from 'react';
import { ButtonNumber } from './style';

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
        setSelectedNumbers((actual) => [...actual, num]);
      }
    }

    return numbers.map((num) => {
      return (
        <ButtonNumber onClick={() => handleNumberClick(num)} key={num}>
          {num}
        </ButtonNumber>
      );
    });
  }

  return <div>{renderNumbers()}</div>;
};

export default GameNumbers;
