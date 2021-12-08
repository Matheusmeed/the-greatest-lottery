import Header from '../../components/Header';
import { Container, GameBtnsDiv, AddToCartBtn, GameBtn } from './style';
import GameNumbers from './BetComponents/GameNumbers';
import Cart from './BetComponents/Cart';

const BetPage = () => {
  return (
    <>
      <Header showHomeBtn={true} />
      <Container>
        <div>
          <div>
            <h2>NEW BET</h2> <h3>FOR GAMENAME</h3>
          </div>

          <div>
            <h4>Choose a game</h4>
          </div>

          <div>
            <h4>Fill your bet</h4>
            <p>Mark as many numbers fdasihfuida fuiadhf fdafd af dadobe</p>
          </div>

          <GameNumbers />

          <GameBtnsDiv>
            <div>
              <GameBtn>Complete Game</GameBtn>
              <GameBtn>Clear Game</GameBtn>
            </div>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </GameBtnsDiv>
        </div>

        <Cart />
      </Container>
    </>
  );
};

export default BetPage;
