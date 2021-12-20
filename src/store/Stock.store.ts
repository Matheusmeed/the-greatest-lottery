import { createSlice } from '@reduxjs/toolkit';
import {
  IInitialState,
  IUserInfoAction,
  IGameListAction,
  IActualGameInfoAction,
  ISelectedNumbersAction,
  IBetContentAction,
  IbetListAction,
} from './types';

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
    betList: [{}],
    resetToken: '',
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
      let arr = [...action.payload];
      state.selectedNumbers = arr.sort((a, b) => a - b);
    },

    setCartBetContent(state, action: IBetContentAction) {
      state.cartBetContent = action.payload;
    },
    clearCartBetContent(state) {
      state.cartBetContent = {
        gameColor: '',
        gameName: '',
        gamePrice: 0,
        selectedNumbers: [],
      };
    },

    setBetList(state, action: IbetListAction) {
      state.betList.push(action.payload);
    },

    clearBetList(state, action) {
      state.betList = action.payload;
    },

    setResetToken(state, action) {
      state.resetToken = action.payload;
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
  setBetList,
  clearBetList,
  clearCartBetContent,
  setResetToken,
} = stock.actions;

export default stock.reducer;
