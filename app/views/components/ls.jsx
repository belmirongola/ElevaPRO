import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from'@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';

import {
    createTheme,
    ThemeProvider,
    useMediaQuery,
    useTheme,
  } from '@mui/material/styles';

const drawerWidth = 240;

function DashboardLayout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <> // Assuming `theme` is defined elsewhere
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        anchor="left"
        classes={{
          paper: window.innerWidth <= 768 ? 'drawer-paper-mobile' : 'drawer-paper', // Conditional class based on window width
        }}
      >
        <Toolbar />
        <List>
          {/* Aside menu items */}
          <ListItem button>Item 1</ListItem>
          <ListItem button>Item 2</ListItem>
          <ListItem button>Item 3</ListItem>
        </List>
      </Drawer>
      <main
        className={window.innerWidth <= 768 ? 'main-mobile' : 'main'} // Conditional class for main content
        style={{ marginLeft: window.innerWidth <= 768 ? 0 : drawerWidth }}
      >
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
            >
              
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {/* Main content */}
          <Typography variant="h4" gutterBottom>
            Dashboard Content
          </Typography>
          <Divider />
          {/* ... */}
        </Container>
      </main>
    </>
  );
}

export default DashboardLayout;
