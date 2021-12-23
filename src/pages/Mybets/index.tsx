import { RootState } from '@store/index';
import { Header, NotLogged } from '@components/index';
import { setaDireitaVerdeMusgo } from '@images/index';
import { formatDate, formatPrice, listBet } from '@shared/index';
import { GamesFilter } from '@pages/Bet/BetComponents/index';
import {
  Container,
  FilterGameDiv,
  BetInfoDiv,
  NewBetBtn,
  OwnBet,
} from './styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ISavedBets {
  choosen_numbers: string;
  created_at: string;
  price: number;

  id: number;
  type: {
    id: number;
    type: string;
  };
}

type savedBets = ISavedBets[];

const MyBetsPage = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(false);
  const [savedBets, setSavedBets] = useState<savedBets>([]);
  const [loading, setLoading] = useState(true);

  const stock = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    stock.userInfo.token.token ? setUserLogged(true) : setUserLogged(false);
    setLoading(false);
  }, [stock]);

  async function getBets() {
    const data = await listBet(stock.selectedGames);
    if (data) {
      setSavedBets(data);
    }
  }

  useEffect(() => {
    getBets();
  }, [stock.selectedGames]);

  return (
    <>
      <Header showHomeBtn={false} />

      {loading && <h5>Loading...</h5>}
      {!loading && !userLogged && <NotLogged />}
      {!loading && userLogged && (
        <>
          <Container>
            <FilterGameDiv>
              <div>
                <h3>RECENT GAMES</h3>
              </div>
              <h4>Filters</h4>
              {savedBets.length
                ? stock.gamesInfo && <GamesFilter disabled={false} />
                : stock.gamesInfo && <GamesFilter disabled={true} />}
            </FilterGameDiv>

            <div>
              <NewBetBtn onClick={() => navigate('/bet')}>
                New Bet <img src={setaDireitaVerdeMusgo} alt='nova aposta' />
              </NewBetBtn>
            </div>
          </Container>
          <BetInfoDiv>
            {savedBets.length ? (
              savedBets.map((bet) => {
                let color;
                stock.gamesInfo.types.map((el) => {
                  if (bet.type.type === el.type) {
                    color = el.color;
                  }
                  return '';
                });

                let choosenNumbers = bet.choosen_numbers.replace(/,/g, ', ');
                let price = formatPrice(bet.price);
                let data = formatDate(bet.created_at);

                if (bet.type.type) {
                  return (
                    <OwnBet key={bet.id} color={color}>
                      <h3>{choosenNumbers}</h3>
                      <h5>
                        {data} - (R$ {price})
                      </h5>
                      <h4>{bet.type.type}</h4>
                    </OwnBet>
                  );
                } else return '';
              })
            ) : (
              <div>
                Você ainda não tem apostas salvas... Vá para a página de
                apostas, adicione suas apostas ao carrinho e salve-as.
              </div>
            )}
          </BetInfoDiv>
        </>
      )}
    </>
  );
};

export default MyBetsPage;
