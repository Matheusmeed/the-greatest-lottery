import { RootState } from '@store/index';
import { addGamesInfo, setActualGameInfo } from '@store/Stock.store';
import { Header, NotLogged } from '@components/index';
import { GameNumbers, GameList, Cart } from '@betComponents/index';
import api from '@shared/services/api';
import { Container, GameName } from './style';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listGames } from '@shared/services/games';

const BetPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    getGamesData();
  }, [dispatch]);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
  }, [stock]);

  async function getGamesData() {
    let data = await listGames();
    if (data) {
      dispatch(addGamesInfo(data[0]));
      dispatch(setActualGameInfo(data[1]));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <>
      <Header showHomeBtn={true} />
      {loading && <h5>Loading...</h5>}
      {!loading && !userLogged && <NotLogged />}
      {!loading &&
        userLogged &&
        (error ? (
          <h1 style={{ marginLeft: 10 }}>API NÃO ENCONTRADA!</h1>
        ) : (
          <Container>
            <div>
              <div>
                <h2>NEW BET</h2>
                <h3>
                  FOR{' '}
                  <GameName>{stock.actualGameInfo.type.toUpperCase()}</GameName>
                </h3>
              </div>

              <div>
                <h4>Choose a game</h4>
              </div>

              {stock.gamesInfo && stock.actualGameInfo ? (
                <GameList filter={false} />
              ) : (
                ''
              )}

              <div>
                <h4>Fill your bet</h4>
                <p>{stock.actualGameInfo.description}</p>
                <p>
                  Números Selecionados:{' '}
                  <span
                    style={{
                      color: stock.actualGameInfo.color,
                      display: 'inline',
                    }}
                  >
                    {stock.selectedNumbers.length}
                  </span>
                </p>
              </div>

              {stock.actualGameInfo && <GameNumbers />}
            </div>
            <Cart />
          </Container>
        ))}
    </>
  );
};
export default BetPage;
