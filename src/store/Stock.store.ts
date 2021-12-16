import { createSlice } from '@reduxjs/toolkit';

export interface IAction {
  payload: {
    user: { name: string; email: string; created_at: string };
    token: { token: string; type: string };
  };
}

interface ICartGames {
  min_cart_value: 30;
  types: Object[];
}

const stock = createSlice({
  name: 'stock',
  initialState: {
    userInfo: {
      user: { name: '', email: '', created_at: '' },
      token: { token: '', type: '' },
    },
    cartGames: {
      min_cart_value: 0,
      types: [{}],
    },
  },
  reducers: {
    saveUserInfo(state, action: IAction) {
      state.userInfo = action.payload;
    },
    removeUserInfo(state) {
      state.userInfo = {
        user: { name: '', email: '', created_at: '' },
        token: { token: '', type: '' },
      };
    },
  },
});

export const { saveUserInfo, removeUserInfo } = stock.actions;
export default stock.reducer;
