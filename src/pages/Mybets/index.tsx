import Header from '../../components/Header';
import { Container, FilterGameDiv, BetInfoDiv } from './styles';
import seta from '../../images/seta-direita-verde-musgo.png';
import GameList from '../Bet/BetComponents/GamesList';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [cartGames, setCartGames] = useState<ICartGames>();
  useEffect(() => {
    axios
      .get('http://127.0.0.1:3333/cart_games')
      .then((res) => setCartGames(res.data));
  }, []);

  return (
    <>
      <Header showHomeBtn={false} />

      <Container>
        <FilterGameDiv>
          <div>
            <h3>RECENT GAMES</h3>
          </div>
          <h4>Filters</h4>
          {/* {cartGames && <GameList games={cartGames.types} />} */}
        </FilterGameDiv>

        <div>
          <button>
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
  );
};

export default MyBetsPage;
