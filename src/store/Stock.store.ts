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

export interface IUserInfo {
  payload: {
    user: userType;
    token: tokenType;
  };
}

export interface IGameList {
  payload: {
    min_cart_value: number;
    types: [gameType];
  };
}

export interface IActualGameInfo {
  payload: gameType;
}

export interface ISelectedNumbers {
  payload: number[];
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
  } as IInitialState,
  reducers: {
    saveUserInfo(state, action: IUserInfo) {
      state.userInfo = action.payload;
    },

    removeUserInfo(state) {
      state.userInfo = {
        user: { name: '', email: '', created_at: '' },
        token: { token: '', type: '' },
      };
    },

    addGamesInfo(state, action: IGameList) {
      state.gamesInfo = action.payload;
    },

    setActualGameInfo(state, action: IActualGameInfo) {
      state.actualGameInfo = action.payload;
    },

    setSelectedNumbers(state, action: ISelectedNumbers) {
      state.selectedNumbers = action.payload;
    },
  },
});

export const {
  saveUserInfo,
  removeUserInfo,
  addGamesInfo,
  setActualGameInfo,
  setSelectedNumbers,
} = stock.actions;
export default stock.reducer;
