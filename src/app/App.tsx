import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Header } from "../common/components/Header/Header";
import { getTheme } from "../common/theme";
import "./App.css";
import { useAppSelector } from "./hooks";
import { Main } from "./Main";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TasksStateType = {
  [key: string]: TaskType[];
};

type ThemeMode = "dark" | "light";

function App() {
  const themeMode = useAppSelector((state) => state.app.themeMode);

  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
