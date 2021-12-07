import Header from '../../components/Header';
import { Container } from './style';
import { GameBtnsDiv } from './style';
import { AddToCartBtn } from './style';

const BetPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <div>
            <h2>NEW BET</h2> <h3>FOR GAME-NAME</h3>
          </div>

          <div>
            <h4>Choose a game</h4>
          </div>

          <div>
            <h4>Fill your bet</h4>
            <p>Mark as many numbers fdasihfuida fuiadhf fdafd af d</p>
          </div>

          <div>0 1 2 4</div>

          <GameBtnsDiv>
            <div>
              <button>Complete Game</button>
              <button>Clear Game</button>
            </div>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </GameBtnsDiv>
        </div>

        <div>Cart fadsf asf asfd fdafdasfdassa</div>
      </Container>
    </>
  );
};

export default BetPage;
