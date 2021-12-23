import { RootState } from '@store/index';
import { setSelectedGames } from '@store/Stock.store';
import { useDispatch, useSelector } from 'react-redux';
import { GameFilterBtn } from './styles';

interface IGamesFilterProps {
  disabled: boolean;
}

const GamesFilter = (props: IGamesFilterProps) => {
  const stock = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  function addSelectedGame(gameName: string) {
    dispatch(setSelectedGames([...stock.selectedGames, gameName]));
  }

  function removeSelectedGame(gameName: string) {
    if (stock.selectedGames.includes(gameName)) {
      let newArr = [...stock.selectedGames];
      newArr.splice(newArr.indexOf(gameName), 1);

      dispatch(setSelectedGames(newArr));
    }
  }

  return (
    <div>
      {stock.gamesInfo.types.map((game) => {
        let color;
        if (!props.disabled) {
          color = game.color;
        }

        if (stock.selectedGames.includes(game.type)) {
          return (
            <GameFilterBtn
              theme={game.color}
              key={game.id}
              onClick={() => {
                if (!props.disabled) removeSelectedGame(game.type);
              }}
            >
              {game.type}
            </GameFilterBtn>
          );
        } else {
          return (
            <GameFilterBtn
              color={color}
              key={game.id}
              onClick={() => {
                if (!props.disabled) {
                  addSelectedGame(game.type);
                }
              }}
            >
              {game.type}
            </GameFilterBtn>
          );
        }
      })}
    </div>
  );
};

export default GamesFilter;
