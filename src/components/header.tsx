'use client';
import { AppBar, Toolbar, Typography } from '@mui/material';
export default function Header() {
  return (
    <AppBar sx={{position:"static", boxShadow:3}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
