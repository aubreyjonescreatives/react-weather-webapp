import * as React from 'react';
import Typography from '@mui/material/Typography';


const footerStyles = {
clear: 'both',

}

const footerStylesText = {
  position: 'fixed', 
  bottom: '0px !important', 
  textAlign: 'center', 
  backgroundColor: '#1976d2', 
  padding: '10px', 
  color: 'white', 
  width: '100%'
}




const Footer = () => {
  return (
    <>
    <footer sx={footerStyles}>
    <Typography sx={footerStylesText}>Aubrey Jones Creatives Copyright &copy; 2023 Aubrey Jones</Typography>
    </footer>
   </>
  )
}

export default Footer; 