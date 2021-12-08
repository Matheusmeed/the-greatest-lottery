import Header from '../../components/Header';
import { Container, FilterGameDiv, BetInfoDiv } from './styles';
import seta from '../../images/seta-direita-verde-musgo.png';

const MyBetsPage = () => {
  return (
    <>
      <Header showHomeBtn={false} />

      <Container>
        <FilterGameDiv>
          <div>
            <h3>RECENT GAMES</h3>
          </div>

          <h4>Filters</h4>
          <div>
            <button>Lotofacil</button>
            <button>MegaSena</button>
            <button>Lotomania</button>
          </div>
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
