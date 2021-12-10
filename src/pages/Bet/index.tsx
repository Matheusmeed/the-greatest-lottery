import Header from '../../components/Header';
import {
  Container,
  GameBtnsDiv,
  AddToCartBtn,
  GameBtn,
  GameName,
} from './style';
import GameNumbers from './BetComponents/GameNumbers';
import Cart from './BetComponents/Cart';
import GameList from './BetComponents/GamesList';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IGameInfo {
  min_cart_value: number;
  types: [
    {
      id: number;
      type: string;
      description: string;
      range: number;
      price: number;
      max_number: number;
      color: string;
    }
  ];
}

interface IActualGame {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

const BetPage = () => {
  const [gameInfo, setGameinfo] = useState<IGameInfo>();
  const [actualGame, setActualGame] = useState<IActualGame>();

  useEffect(() => {
    axios.get('http://127.0.0.1:3333/cart_games').then((res) => {
      setGameinfo(res.data);
      setActualGame(res.data.types[0]);
    });
  }, []);

  return (
    <>
      <Header showHomeBtn={true} />
      <Container>
        <div>
          <div>
            <h2>NEW BET</h2>
            <h3>
              FOR <GameName>{actualGame?.type.toUpperCase()}</GameName>
            </h3>
          </div>

          <div>
            <h4>Choose a game</h4>
          </div>

          {gameInfo && actualGame ? (
            <GameList
              actualGame={actualGame}
              setActualGame={setActualGame}
              games={gameInfo?.types}
            />
          ) : (
            ''
          )}

          <div>
            <h4>Fill your bet</h4>
            <p>{actualGame?.description}</p>
          </div>

          {actualGame && <GameNumbers actualGameInfo={actualGame} />}

          <GameBtnsDiv>
            <div>
              <GameBtn>Complete Game</GameBtn>
              <GameBtn>Clear Game</GameBtn>
            </div>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </GameBtnsDiv>
        </div>

        <Cart />
      </Container>
    </>
  );
};

export default BetPage;
