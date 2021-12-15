import { createSlice } from '@reduxjs/toolkit';

export interface IAction {
  payload: {
    user: { name: string; email: string; created_at: string };
    token: { token: string; type: string };
  };
}

const stock = createSlice({
  name: 'stock',
  initialState: {
    userInfo: {
      user: { name: '', email: '', created_at: '' },
      token: { token: '', type: '' },
    },
  },
  reducers: {
    saveUserInfo(state, action: IAction) {
      state.userInfo = action.payload;
    },
  },
});

export const { saveUserInfo } = stock.actions;
export default stock.reducer;
