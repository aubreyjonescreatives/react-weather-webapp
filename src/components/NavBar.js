import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
 <Box sx={navStyles} className="navStyles">
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
