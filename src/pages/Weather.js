import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';




const searchHeader = {
marginLeft: '50px', 
padding: '20px'



}




const Search = styled('div')(({ theme }) => ({
    display: 'inline-flex', 
    margin: '10px', 
    width: '25%'


  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    fontSize: '20px', 
    backgroundColor: 'blue', 
    width: '35px', 
    textAlign: 'center', 
    color: 'white', 
    borderRadius: '0px 25px 25px 0px', 
    cursor: 'pointer', 
    height: '32px'

  }));
  

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
   border: '1px solid gray', 
   borderRadius: '25px 0px 0px 25px', 
   padding: '15px', 
   height: '15px'

    
  }));



// fetch to openweathermap API 
// sourced from MDN's Fetch function 




async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });














const Weather = () => {
  return (
<>

<h3 sx={searchHeader}>Search a City</h3>


    <Search>
          
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
              <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>


    </>
  )
}

export default Weather; 