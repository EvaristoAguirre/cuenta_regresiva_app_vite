/* eslint-disable no-unused-vars */
import './App.css'
import {Route,Routes, useNavigate} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login';

function App() {

const navigate = useNavigate();
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
