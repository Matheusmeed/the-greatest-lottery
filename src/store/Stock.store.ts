import { createSlice } from '@reduxjs/toolkit';

export interface IAction {
  payload: { user: {}; token: { token: string } };
}

const stock = createSlice({
  name: 'stock',
  initialState: {
    userInfo: { user: {}, token: { token: '' } },
  },
  reducers: {
    saveUserInfo(state, action: IAction) {
      state.userInfo = action.payload;
    },
  },
});

export const { saveUserInfo } = stock.actions;
export default stock.reducer;
