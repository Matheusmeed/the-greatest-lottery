import { RootState } from '@store/index';
import { setActualGameInfo } from '@store/Stock.store';
import { Container, GameButton } from './styles';
import { useDispatch, useSelector } from 'react-redux';

interface IGameListProps {
  filter: boolean;
  disabled: boolean;
}

const GameList = (props: IGameListProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function renderGames() {
    let color: string;

    return stock.gamesInfo.types.map((el) => {
      if (!props.disabled) {
        color = el.color;
      }

      if (el.id === stock.actualGameInfo.id) {
        return (
          <GameButton theme={color} key={el.id}>
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
            color={color}
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
