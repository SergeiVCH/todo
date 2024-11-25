import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import type { TodolistType } from "../../../../../../app/App";
import { EditableSpan } from "../../../../../../common/components/EditableSpan/EditableSpan";
import {
  changeTodolistTitleAC,
  removeTodolistAC,
} from "../../../../../../model/todolists-reducer";
import { useAppDispatch } from "../../../../../../app/hooks";

type Props = {
  todolist: TodolistType;
};

export const TodolistTitle = ({ todolist }: Props) => {
  const dispatch = useAppDispatch();

  const updateTodolist = (title: string) => {
    dispatch(changeTodolistTitleAC({ id: todolist.id, title }));
  };

  const removeTodolist = () => {
    dispatch(removeTodolistAC(todolist.id));
  };

  return (
    <div className={"todolist-title-container"}>
      <h3>
        <EditableSpan value={todolist.title} onChange={updateTodolist} />
      </h3>
      <IconButton onClick={removeTodolist}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
