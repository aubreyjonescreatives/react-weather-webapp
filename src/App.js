import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  // Route, 
  Outlet, 
} from 'react-router-dom'; 
import NavBar from './components/NavBar.js'; 
import WeatherDashboard from './pages/SearchWeather.js'; 
import DateandTime from './components/dateandtime/DateandTime'; 
import Footer from './components/Footer.js'; 



const Layout = () => {
  return (
    <>
    <NavBar/> 
    <Outlet/> 
    <Footer/>

    </>
  )
}


const router = createBrowserRouter([

  {
path: '/', 
element: <Layout />, 

children: [
  {
    path: '/', 
    element: <WeatherDashboard />, 
  }, 
  {
    path: '/dateandtime', 
    element: <DateandTime />, 
  }

  
]


  }])





function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  );
}

export default App;
