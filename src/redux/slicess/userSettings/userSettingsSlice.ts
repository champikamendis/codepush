import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import userSettings from '../../../configuration/userSettings.ts';
import {RootState} from '../../store.ts';
import {UserSettings} from '../../../shared/constants';
import {THEME, LANGUAGES} from '../../../shared/constants';

const initialState: UserSettings = {...userSettings};

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setTheme: (state: UserSettings, action: PayloadAction<THEME>) => {
      state.customisation.defaultTheme = action.payload;
    },
    setLanguage: (state: UserSettings, action: PayloadAction<LANGUAGES>) => {
      state.customisation.defaultLanguage = action.payload;
    },
  },
});

export const {setTheme, setLanguage} = userSettingsSlice.actions;
export const selectedUserSettings = (state: RootState) => state.userSettings;
export default userSettingsSlice.reducer;
