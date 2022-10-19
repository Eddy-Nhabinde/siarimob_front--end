import './App.css';
import Menu from './components/menu/menu';
import { Home } from './pages/home/home';
import { Login } from './pages/logIn/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginContext } from './contexts/loginContext';
import { useState } from 'react';
import { BackdropContext } from './contexts/backdropContext';
import { AlertContext } from './contexts/alertContext';

function App() {
  const setLoginContext = useState(true)
  const setAlertContext = useState(false)
  const setBackdropContext = useState(false)

  return (
    <>
      <Router>
        <LoginContext.Provider value={{
          setLoginContext
        }}>
          <AlertContext.Provider value={{
            setAlertContext
          }}>
            <BackdropContext.Provider value={{
              setBackdropContext
            }}>
              <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/home' element={<Menu />} ></Route>
              </Routes>
            </BackdropContext.Provider>
          </AlertContext.Provider>
        </LoginContext.Provider>
      </Router>
    </>

  );
}

export default App;
