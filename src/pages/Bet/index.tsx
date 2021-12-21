import { Header, NotLogged } from '../../components';
import { Container, GameName } from './style';
import { GameNumbers, GameList, Cart } from './BetComponents';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addGamesInfo, setActualGameInfo } from '../../store/Stock.store';
import api from '../../shared/services/api';

const BetPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(false);

  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    api
      .get('/cart_games')
      .then((res) => {
        dispatch(addGamesInfo(res.data));
        dispatch(setActualGameInfo(res.data.types[0]));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
  }, [stock]);

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
