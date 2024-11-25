import {createTheme} from '@mui/material/styles';
import type {ThemeMode} from '../app/app-reducer';

export const getTheme = (mode: ThemeMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#087EA4',
      },
    },
  });
}