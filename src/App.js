import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import PagesNav from './components/PagesNav';
import Follow from './pages/Follow';
import Messaging from './pages/Messaging';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {

  const [modalOpened, setModalOpened] = useState(false);
  const [hideRoute, setHideRouter] = useState(false)

  const resize = () => {
    setHideRouter((window.innerWidth <= 1024));  
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
      <PagesNav rotate={true} setModalOpened={setModalOpened} />
      <Routes>
        <Route path='/' element={<Home setModalOpened={setModalOpened} modalOpened={modalOpened} />}/>
        <Route path='/profile' element={<Profile setModalOpened={setModalOpened} modalOpened={modalOpened}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {hideRoute &&
          <>
            {["/followers", "/following"].map((path, index) => 
              <Route path={path} element={<Follow />} key={index} />
            )}
            <Route path='/messaging' element={<Messaging />} />
          </>
          
        }
      </Routes> 
      <PagesNav />
    </div>
  );
}

export default App;
