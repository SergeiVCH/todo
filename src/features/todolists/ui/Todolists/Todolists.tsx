import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../../../app/hooks";
import { Todolist } from "./Todolist/Todolist";
import { RootState } from "../../../../app/store";

const selectTodolists = (state: RootState) => state.todolists

export const Todolists = () => {
  const todolists = useAppSelector((state) => state.todolists);
  return (
    <>
      {todolists.map((tl) => {
        return (
          <Grid key={tl.id}>
            <Paper sx={{ p: "0 20px 20px 20px" }}>
              <Todolist todolist={tl} />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};
