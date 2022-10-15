import './App.css';
import Menu from './components/menu/menu';
import { Home } from './pages/home/home';
import { Login } from './pages/logIn/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginContext } from './contexts/loginContext';
import { useState } from 'react';

function App() {
  const setLoginContext = useState(true)

  return (
    <>
      <Router>
        <LoginContext.Provider value={{
          setLoginContext
        }}>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/home' element={<Menu />} ></Route>
          </Routes>
        </LoginContext.Provider>
      </Router>
    </>

  );
}

export default App;
