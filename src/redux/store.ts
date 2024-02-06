import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userSettingsSlice from './slicess/userSettings/userSettingsSlice.ts';
import tradeUserSlice from './slicess/tradeUser/tradeUserSlice.ts';

const persistConfig = {
  key: 'userSettings',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userSettingsSlice);
export const store = configureStore({
  reducer: {
    userSettings: persistedReducer,
    tradeUser: tradeUserSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
