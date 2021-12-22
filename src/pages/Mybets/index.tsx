import { RootState } from '@store/index';
import api from '@shared/services/api';
import { Header, NotLogged, Notification } from '@components/index';
import { GameList } from '@betComponents/index';
import { setaDireitaVerdeMusgo } from '@images/index';
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

  useEffect(() => {
    if (stock.actualGameInfo.type) {
      api
        .get(
          `/bet/all-bets?type%5B%5D=${stock.actualGameInfo.type}` ||
            `/bet/all-bets`,
          {
            headers: {
              Authorization: `Bearer ${stock.userInfo.token.token}`,
            },
          }
        )
        .then((res) => setSavedBets(res.data.reverse()))
        .catch(() =>
          Notification({ message: 'Ocorreu algum erro!', type: 'danger' })
        );
    } else {
      api
        .get(`/bet/all-bets`, {
          headers: {
            Authorization: `Bearer ${stock.userInfo.token.token}`,
          },
        })
        .then((res) => setSavedBets(res.data.reverse()))
        .catch(() =>
          Notification({ message: 'Ocorreu algum erro!', type: 'danger' })
        );
    }
  }, [stock.actualGameInfo, stock.userInfo.token.token]);

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
                ? stock.gamesInfo && <GameList filter={true} disabled={false} />
                : stock.gamesInfo && <GameList filter={true} disabled={true} />}
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
                let price = bet.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                });
                let data = new Date(bet.created_at).toLocaleDateString(
                  'pt-BR',
                  { timeZone: 'UTC' }
                );

                if (bet.type.type) {
                  return (
                    <OwnBet key={bet.id} color={color}>
                      <h3>{choosenNumbers}</h3>
                      <h5>
                        {data} - ({price})
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
