import React from 'react'
import BackgroundImg from '../../images/sunanimation/SunDisplay0.png'
import Sunrise from '../../images/sunanimation/sunrise.png'; 





const sunAnimation = {
  //  position: 'relative'
}

const Background = {
backgroundImage: `url(${BackgroundImg})`,
backgroundSize: 'cover', 
backgroundRepeat: 'no-repeat',  
// position: 'absolute', 
// marginRight: 'auto', 
// marginLeft: 'auto', 
// top: '0',
 height: '100px', 
 width: '80%'


}

const SunriseStyles = {
// position: 'absolute', 
// zIndex: '999', 
// top: '1', 
// width: '50px', 
// height: '50px'
}







const SunriseSunset = () => {
  return (
    <>
    <div sx={sunAnimation}>
    <div sx={Background}></div>
    <img src={Sunrise} sx={SunriseStyles} /> 
    </div>
    </>
  )
}

export default SunriseSunset