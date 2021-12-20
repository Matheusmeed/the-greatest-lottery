export type userType = { name: string; email: string; created_at: string };
export type tokenType = { token: string; type: string };

export type gameType = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

// Tipagem das Actions

export interface IUserInfoAction {
  payload: {
    user: userType;
    token: tokenType;
  };
}

export interface IGameListAction {
  payload: {
    min_cart_value: number;
    types: [gameType];
  };
}

export interface IActualGameInfoAction {
  payload: gameType;
}

export interface ISelectedNumbersAction {
  payload: number[];
}

export interface IBetContentAction {
  payload: IBetContent;
}

export interface IbetListAction {
  payload: IBetList;
}

//Tipagens para o InitialState

export interface IBetContent {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

export interface IBetList {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

export interface IInitialState {
  userInfo: {
    user: userType;
    token: tokenType;
  };

  gamesInfo: {
    min_cart_value: number;
    types: [gameType];
  };

  actualGameInfo: gameType;
  selectedNumbers: number[];
  cartBetContent: IBetContent;
  betList: IBetList[];
  resetToken: string;
}
