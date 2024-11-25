import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch } from "react-redux";
import { updateThemeModeAC } from "../../../app/app-reducer";
import { useAppSelector } from "../../../app/hooks";
import { getTheme } from "../../theme";
import { MenuButton } from "../MenuButton/MenuButton";

export const Header = () => {
  const themeMode = useAppSelector((state) => state.app.themeMode);

  const dispatch = useDispatch();

  const theme = getTheme(themeMode);

  const changeModeHandler = () => {
    dispatch(updateThemeModeAC(themeMode === "light" ? "dark" : "light"));
  };

  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <div>
          <MenuButton>Login</MenuButton>
          <MenuButton>Logout</MenuButton>
          <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
          <Switch color={"default"} onChange={changeModeHandler} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
