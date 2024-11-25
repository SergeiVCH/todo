import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { EditableSpan } from "../../../../../../common/components/EditableSpan/EditableSpan";
import { getListItemSx } from "../../../../../../Todolist.styles";
import { TaskType, TodolistType } from "../../../../../../app/App";
import { ChangeEvent } from "react";
import {
  removeTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
} from "../../../../../../model/tasks-reducer";
import {useAppDispatch} from '../../../../../../app/hooks';

type Props = {
  task: TaskType;
  todolist: TodolistType;
};

export const Task = ({ task, todolist }: Props) => {
  const dispatch = useAppDispatch();

  const removeTask = () => {
    dispatch(removeTaskAC({ taskId: task.id, todolistId: todolist.id }));
  };

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked;
    dispatch(
      changeTaskStatusAC({
        taskId: task.id,
        isDone: newStatusValue,
        todolistId: todolist.id,
      })
    );
  };

  const updateTask = (title: string) => {
    dispatch(
      changeTaskTitleAC({ taskId: task.id, title, todolistId: todolist.id })
    );
  };
  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone} onChange={changeTaskStatus} />
        <EditableSpan value={task.title} onChange={updateTask} />
      </div>
      <IconButton onClick={removeTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
