import { deleteTask, Task, toggleTask } from "@/app/store/taskSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Typography, IconButton, Box, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function TaskItem({ task }: { task: Task }) {
  const dispatch = useDispatch();

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 1,
        borderRadius: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Checkbox
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          color="primary"
        />
        <Typography
          variant="body1"
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "black",
          }}
        >
          {task.task}
        </Typography>
      </Box>

      <IconButton onClick={() => dispatch(deleteTask(task.id))} color="error">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default TaskItem;
