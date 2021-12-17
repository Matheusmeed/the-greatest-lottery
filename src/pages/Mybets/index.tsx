import Header from '../../components/Header';
import { Container, FilterGameDiv, BetInfoDiv, NewBetBtn } from './styles';
import seta from '../../images/seta-direita-verde-musgo.png';
import GameList from '../Bet/BetComponents/GamesList';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NotLogged from '../../components/NotLogged';
import api from '../../services/api';
import { GameButton } from '../Bet/BetComponents/GamesList/styles';

const MyBetsPage = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(false);
  const [savedBets, setSavedBets] = useState([]);

  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
  }, [stock]);

  useEffect(() => {
    api
      .get(`/bet/all-bets?type%5B%5D=${stock.actualGameInfo.type}`, {
        headers: {
          Authorization: `Bearer ${stock.userInfo.token.token}`,
        },
      })
      .then((res) => setSavedBets(res.data))
      .catch((error) => alert('Ocorreu algum erro!'));
  }, [stock.actualGameInfo, stock.userInfo.token.token]);

  return (
    <>
      <Header showHomeBtn={false} />

      {userLogged ? (
        <>
          <Container>
            <FilterGameDiv>
              <div>
                <h3>RECENT GAMES</h3>
              </div>
              <h4>Filters</h4>
              {stock.gamesInfo && <GameList filter={true} />}
            </FilterGameDiv>

            <div>
              <NewBetBtn onClick={() => navigate('/bet')}>
                New Bet <img src={seta} alt='nova aposta' />
              </NewBetBtn>
            </div>
          </Container>
          <BetInfoDiv>
            {savedBets
              ? savedBets.map((bet) => {
                  return (
                    <div>
                      <h3>1, 2, 3, 54</h3>
                      <h5>30/11/2021 - 50 reais</h5>
                      <h4>Lotofácil</h4>
                    </div>
                  );
                })
              : ''}

            {/* <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div> */}
          </BetInfoDiv>
        </>
      ) : (
        <NotLogged />
      )}
    </>
  );
};

export default MyBetsPage;
