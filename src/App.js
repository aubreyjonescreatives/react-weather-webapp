import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  // Route, 
  Outlet, 
} from 'react-router-dom'; 
import NavBar from './components/NavBar.js'; 
import WeatherDashboard from './pages/Weather.js'; 
import Footer from './components/Footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';



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
