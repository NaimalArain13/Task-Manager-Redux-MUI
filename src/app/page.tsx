import AddTask from "@/components/addTask";
import TaskList from "@/components/taskList";
import { Container, Typography, Box, Paper } from "@mui/material";

export default function Home() {
  
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
      >
        Task Manager
      </Typography>

      <Box mt={3}>
        <AddTask />
        <TaskList />
      </Box>
    </Paper>
  </Container>
  );
}
