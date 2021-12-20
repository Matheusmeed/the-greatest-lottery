import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Container, GameButton } from './styles';
import { setActualGameInfo } from '../../../../store/Stock.store';

interface IGameListProps {
  filter: boolean;
}

const GameList = (props: IGameListProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function renderGames() {
    return stock.gamesInfo.types.map((el) => {
      if (el.id === stock.actualGameInfo.id) {
        return (
          <GameButton theme={el.color} key={el.id}>
            {el.type}
          </GameButton>
        );
      } else {
        return (
          <GameButton
            onClick={() => {
              if (props.filter) {
                dispatch(setActualGameInfo(el));
              } else {
                dispatch(setActualGameInfo(el));
              }
            }}
            color={el.color}
            key={el.id}
          >
            {el.type}
          </GameButton>
        );
      }
    });
  }

  return <Container>{renderGames()}</Container>;
};

export default GameList;
