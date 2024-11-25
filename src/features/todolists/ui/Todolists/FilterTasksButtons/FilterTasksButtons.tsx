import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { filterButtonsContainerSx } from "../../../../../Todolist.styles";
import { TodolistType, FilterValuesType } from "../../../../../app/App";
import { changeTodolistFilterAC } from "../../../../../model/todolists-reducer";
import {useAppDispatch} from '../../../../../app/hooks';

type Props = {
  todolist: TodolistType;
};

export const FilterTasksButtons = ({ todolist }: Props) => {
  const dispatch = useAppDispatch();

  const changeFilter = (filter: FilterValuesType) => {
    dispatch(changeTodolistFilterAC({ id: todolist.id, filter }));
  };
  return (
    <Box sx={filterButtonsContainerSx}>
      <Button
        variant={todolist.filter === "all" ? "outlined" : "text"}
        color={"inherit"}
        onClick={() => changeFilter("all")}
      >
        All
      </Button>
      <Button
        variant={todolist.filter === "active" ? "outlined" : "text"}
        color={"primary"}
        onClick={() => changeFilter("active")}
      >
        Active
      </Button>
      <Button
        variant={todolist.filter === "completed" ? "outlined" : "text"}
        color={"secondary"}
        onClick={() => changeFilter("completed")}
      >
        Completed
      </Button>
    </Box>
  );
};
