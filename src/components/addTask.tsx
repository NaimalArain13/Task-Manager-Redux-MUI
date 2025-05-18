"use client"
import { addTask } from "@/app/store/taskSlice";
import { useState , FormEvent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";

function AddTask() {
    const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!task.trim()) return;
    console.log("function called", task)
    dispatch(addTask(task))
    setTask("")
  }
  return (
    <Box
      component="form"
      onSubmit={addTaskHandler}
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        label="Add Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ whiteSpace: "nowrap" }}
      >
        Add
      </Button>
    </Box>
  )
}

export default AddTask