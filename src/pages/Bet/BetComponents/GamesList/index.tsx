import { Container, GameButton } from './styles';

interface IGameList {
  actualGame: {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
  };
  setActualGame: Function;
  games: [
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

const GameList = (props: IGameList) => {
  function renderGames() {
    return props.games.map((el) => {
      if (el.id === props.actualGame.id) {
        return (
          <GameButton theme={el.color} key={el.id}>
            {el.type}
          </GameButton>
        );
      } else {
        return (
          <GameButton
            onClick={() => props.setActualGame(el)}
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
