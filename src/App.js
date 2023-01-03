import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import Follow from './pages/Follow';
import Messaging from './pages/Messaging';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {

  const [modalOpened, setModalOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0)

  const resize = () => {
    setWindowWidth(window.innerWidth);  
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize()
    return () => {
     window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home setModalOpened={setModalOpened} modalOpened={modalOpened} />}/>
        <Route path='/profile' element={<Profile setModalOpened={setModalOpened} modalOpened={modalOpened}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {windowWidth < 1024 &&
          <>
            {["/followers", "/following"].map((path, index) => 
              <Route path={path} element={<Follow setModalOpened={setModalOpened}/>} key={index} />
            )}
          </>
        }
        {windowWidth < 850 &&
          <Route path='/messaging' element={<Messaging />} />
        }
      </Routes> 
    </div>
  );
}

export default App;
