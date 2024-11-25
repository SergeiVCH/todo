import List from "@mui/material/List";
import { TodolistType } from "../../../../../app/App";
import { useAppSelector } from "../../../../../app/hooks";
import { Task } from "./Task/Task";

type Props = {
  todolist: TodolistType;
};
export const Tasks = ({ todolist }: Props) => {
  const tasks = useAppSelector((state) => state.tasks);

  const allTodolistTasks = tasks[todolist.id];
  let tasksForTodolist = allTodolistTasks;

  if (todolist.filter === "active") {
    tasksForTodolist = allTodolistTasks.filter((task) => !task.isDone);
  }

  if (todolist.filter === "completed") {
    tasksForTodolist = allTodolistTasks.filter((task) => task.isDone);
  }

  return (
    <>
      {tasksForTodolist.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <List>
          {tasksForTodolist.map((task) => {
            return <Task key={task.id} task={task} todolist={todolist} />;
          })}
        </List>
      )}
    </>
  );
};
