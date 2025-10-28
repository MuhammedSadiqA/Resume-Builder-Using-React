// From MATERIAL UI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
Tooltip
function Header() {

  const projectInfo="⚛️ React — A JavaScript library for building fast, reusable, and interactive user interfaces. It uses components to manage UI efficiently and updates only what’s needed when data changes."
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img style={{width:"30px"}} src="https://cdn3d.iconscout.com/3d/premium/thumb/resume-3d-icon-png-download-8071454.png" alt="Logo image" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} className='text-light text-decoration-none' >rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo} ><Button color="inherit">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>  )
}

export default Header