"use client"
import { Task } from "@/app/store/taskSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import TaskItem from "./taskItem";
import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

export default function TaskList() {
  const [filter, setFilter]=useState<"all"|"completed"|"incompleted">("all")
  const tasks = useSelector((state: RootState) => state.tasks);
  const filteredTask=tasks.filter(task=>{
    if(filter==="completed")return task.completed;
    if(filter==="incompleted")return !task.completed;
    return true

})

const handleChange = (_: React.SyntheticEvent, newValue: string) => {
  setFilter(newValue as typeof filter);
};
  return (
    <Box sx={{ width: "100%" }}>
       <Tabs
        value={filter}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All" value="all" />
        <Tab label="Completed" value="completed" />
        <Tab label="Incomplete" value="incomplete" />
      </Tabs>
      <Box mt={2}>
        {filteredTask.length > 0 ? (
          filteredTask.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </Box>
    </Box>
  );
}
