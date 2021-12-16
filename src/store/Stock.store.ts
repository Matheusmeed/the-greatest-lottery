import { createSlice } from '@reduxjs/toolkit';

type userType = { name: string; email: string; created_at: string };
type tokenType = { token: string; type: string };

type gameType = {
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

//Tipagens para o InitialState

export interface IBetContent {
  selectedNumbers: number[];
  gameName: string;
  gameColor: string;
  gamePrice: number;
}

interface IInitialState {
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
}

const stock = createSlice({
  name: 'stock',
  initialState: {
    userInfo: {
      user: {},
      token: {},
    },

    gamesInfo: {
      min_cart_value: 0,
      types: [{}],
    },

    actualGameInfo: {},

    selectedNumbers: [0],

    cartBetContent: {},
  } as IInitialState,
  reducers: {
    saveUserInfo(state, action: IUserInfoAction) {
      state.userInfo = action.payload;
    },

    removeUserInfo(state) {
      state.userInfo = {
        user: { name: '', email: '', created_at: '' },
        token: { token: '', type: '' },
      };
    },

    addGamesInfo(state, action: IGameListAction) {
      state.gamesInfo = action.payload;
    },

    setActualGameInfo(state, action: IActualGameInfoAction) {
      state.actualGameInfo = action.payload;
    },

    setSelectedNumbers(state, action: ISelectedNumbersAction) {
      state.selectedNumbers = action.payload;
    },

    setCartBetContent(state, action: IBetContentAction) {
      state.cartBetContent = action.payload;
    },
  },
});

export const {
  saveUserInfo,
  removeUserInfo,
  addGamesInfo,
  setActualGameInfo,
  setSelectedNumbers,
  setCartBetContent,
} = stock.actions;
export default stock.reducer;
