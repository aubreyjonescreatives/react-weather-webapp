import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import BackgroundImg from '../../images/sunanimation/SunDisplay0.png'
import Sunrise from '../../images/sunanimation/midday.png'; 
import Sunset from '../../images/sunanimation/sunset.png'; 




const sunGrid = {
//   display: 'grid'
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
// justifyContent: 'flex-end', 
// //float: 'right', 
// // position: 'absolute', 
// // zIndex: '999', 
// // top: '1', 
//  width: '50px', 
//  height: '50px'
}

const SunsetStyles = {
//     justifyContent: 'flex-start', 
//    // float: 'left', 
//     // position: 'absolute', 
//     // zIndex: '999', 
//     // top: '1', 
//      width: '50px', 
//      height: '50px'
    }







const SunriseSunset = () => {
  return (
    <>
    <Container sx={sunGrid} className="sunGrid">
    <div sx={Background}></div>
    <Row>
    <Col>
    <img src={Sunrise} sx={SunriseStyles} className="SunriseStyles" alt="Sunrise Clipart"/> 
    </Col>
    <Col>
    <img src={Sunset} sx={SunsetStyles} className="SunsetStyles" alt="Sunset Clipart"/> 
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default SunriseSunset