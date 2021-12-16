import Header from '../../components/Header';
import { Container, FilterGameDiv, BetInfoDiv } from './styles';
import seta from '../../images/seta-direita-verde-musgo.png';
import GameList from '../Bet/BetComponents/GamesList';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NotLogged from '../../components/NotLogged';
import api from '../../services/api';
import { GameButton } from '../Bet/BetComponents/GamesList/styles';

interface ICartGames {
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

const MyBetsPage = () => {
  const navigate = useNavigate();
  const [cartGames, setCartGames] = useState<ICartGames>();
  const [userLogged, setUserLogged] = useState(false);

  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    api.get('/cart_games').then((res) => setCartGames(res.data));
  }, []);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
  }, [stock]);

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
              {/* {cartGames && <GameList games={cartGames.types} />} */}
            </FilterGameDiv>

            <div>
              <button onClick={() => navigate('/bet')}>
                New Bet <img src={seta} alt='nova aposta' />
              </button>
            </div>
          </Container>
          <BetInfoDiv>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
            <div>
              <h3>01, 02, 03, 04, 05, 06</h3>
              <h5>30/11/2021 - 50 reais</h5>
              <h4>Lotofácil</h4>
            </div>
          </BetInfoDiv>
        </>
      ) : (
        <NotLogged />
      )}
    </>
  );
};

export default MyBetsPage;
