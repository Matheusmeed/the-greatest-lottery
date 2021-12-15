import Header from '../../components/Header';
import { Container, GameName } from './style';
import GameNumbers from './BetComponents/GameNumbers';
import Cart from './BetComponents/Cart';
import GameList from './BetComponents/GamesList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NotLogged from '../../components/Header/NotLogged';

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

interface IBetContent {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

interface IUserInfo {}

const BetPage = () => {
  const [gameInfo, setGameinfo] = useState<IGameInfo>();
  const [actualGame, setActualGame] = useState<IActualGame>();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [cartBetContent, setCartBetContent] = useState<IBetContent>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://127.0.0.1:3333/cart_games')
      .then((res) => {
        setGameinfo(res.data);
        setActualGame(res.data.types[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
  }, [stock]);

  return (
    <>
      <Header showHomeBtn={true} />
      {userLogged ? (
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <h1 style={{ marginLeft: 10 }}>API NÃO ENCONTRADA!</h1>
        ) : (
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
                <p>
                  Números Selecionados:{' '}
                  <span style={{ color: actualGame?.color, display: 'inline' }}>
                    {selectedNumbers.length}
                  </span>
                </p>
              </div>

              {actualGame && (
                <GameNumbers
                  actualGameInfo={actualGame}
                  setSelectedNumbers={setSelectedNumbers}
                  selectedNumbers={selectedNumbers}
                  setCartBetContent={setCartBetContent}
                />
              )}
            </div>
            <Cart cartBetContent={cartBetContent} />
          </Container>
        )
      ) : (
        <NotLogged />
      )}
    </>
  );
};
export default BetPage;
