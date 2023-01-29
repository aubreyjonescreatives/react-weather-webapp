import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DateandTime from '../components/dateandtime/DateandTime.js';


const navStyles = {
  backgroundColor: '#1976d2', 
  height: '35px', 
  color: 'white', 
  padding: '10px', 
  

}

const typeStyles = {
  fontSize: '20px'
}



const NavBar = () => {


  return (
    <>
 <Box sx={navStyles}>
    <Typography sx={typeStyles}>
      Weather Dashboard
    </Typography>
  
    </Box>

    
  </>
  )
}


NavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };



export default NavBar;
