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
        Manage Your Tasks Efficently
      </Typography>
      <Typography variant="h6"
      textAlign={"center"}
      fontWeight={"medium"}
      sx={{ mt: 1 }}
      color="text.secondary"
      >
         Organize, prioritize, and track your daily to-dos with ease using this simple task manager.
      </Typography>

      <Box mt={3}>
        <AddTask />
        <TaskList />
      </Box>
    </Paper>
  </Container>
  );
}
