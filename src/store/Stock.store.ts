import { createSlice } from '@reduxjs/toolkit';

export interface IActionUserInfo {
  payload: {
    user: { name: string; email: string; created_at: string };
    token: { token: string; type: string };
  };
}

export interface IActionGameList {
  payload: {
    min_cart_value: number;
    types: [
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
  };
}

interface IInitialState {
  userInfo: {
    user: { name: string; email: string; created_at: string };
    token: { token: string; type: string };
  };
  gamesInfo: {
    min_cart_value: number;
    types: [
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
  };
}

const stock = createSlice({
  name: 'stock',
  initialState: {
    userInfo: {
      user: { name: '', email: '', created_at: '' },
      token: { token: '', type: '' },
    },
    gamesInfo: {
      min_cart_value: 0,
      types: [{}],
    },
  } as IInitialState,
  reducers: {
    saveUserInfo(state, action: IActionUserInfo) {
      state.userInfo = action.payload;
    },
    removeUserInfo(state) {
      state.userInfo = {
        user: { name: '', email: '', created_at: '' },
        token: { token: '', type: '' },
      };
    },
    addGamesInfo(state, action: IActionGameList) {
      state.gamesInfo = action.payload;
    },
  },
});

export const { saveUserInfo, removeUserInfo, addGamesInfo } = stock.actions;
export default stock.reducer;
