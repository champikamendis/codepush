import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store.ts';
import {TradeUser} from '../../../shared/constants';

const initialState: TradeUser = {isLogin: false};

export const tradeUserSlice = createSlice({
  name: 'tradeUser',
  initialState,
  reducers: {
    login: (state: TradeUser, action: PayloadAction<TradeUser>) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const {login} = tradeUserSlice.actions;
export const selectedTradeUser = (state: RootState) => state.tradeUser;
export default tradeUserSlice.reducer;
