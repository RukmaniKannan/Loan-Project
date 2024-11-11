import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/LoginPage/Login';
import Register from './Component/Register/Register';
import SideNavBar from './SideNavBar/SideNavBar';

function App() {
  // function Layout() {
  //   return (
  //     <SideNavBar>
  //       <Outlet/>
  //     </SideNavBar>
      
  //   );
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
    {/* <Route  element={<Layout/>} /> */}
    <Route path="/sidebar" element={<SideNavBar />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
