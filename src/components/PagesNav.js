import '../styles/pagesNav.css'
import {
  EmailOutlined, 
  PermIdentityOutlined, 
  OtherHousesOutlined,
  PeopleAltOutlined,
  OtherHouses,
  Email,
  Add,
  PeopleAlt,
  Person
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PagesNav({rotate=false, setModalOpened}) {

  const [locationChanged, setLocationChanged] = useState(false)
  const [pathname, setPathname] = useState(null)

  // get the URL pathname and set in the state
  useEffect(() => {
    if(locationChanged || true) {
      const pathname = window.location.pathname
      setPathname(pathname.slice(1, pathname.length))
    }
  }, [locationChanged])

  // remove bottom page nav when a the windows height becomes smaller particularly when a virtual keyboard is displayed
  useEffect(() => {
    const pageNav = document.querySelector(".pageNavAlt")
    const initialWindowHeight = window.innerHeight
    if(pathname !== 'login' && pathname !== 'signup' && pathname !== 'messaging' && pathname !== null) {
      if('visualViewport' in window) {
        window.visualViewport.addEventListener('resize', function() {
          if(window.innerHeight + 50 < initialWindowHeight) {
            pageNav.style.display = 'none'
          } else if (pathname !== 'login' && pathname !== 'signup' ) {
            pageNav.style.display = 'block'
          }
        })
      }
    }
  }, [pathname])

  return (
    <div className={`pagesNav ${rotate ? 'pagesNavVertical' : 'pageNavAlt'}`} id='pageNav'>
      <div className='pagesNav__container'>
        <Link 
          to='/' 
          className='pagesNav__action' 
          onClick={() => setLocationChanged(!locationChanged)}
        >
          {pathname === ''
            ? <OtherHouses />
            : <OtherHousesOutlined />
          }
        </Link>
        <Link 
          to='/messaging' 
          className='pagesNav__action remove' 
          onClick={() => setLocationChanged(!locationChanged)}
        >
          {pathname === 'messaging'
            ? <Email />
            : <EmailOutlined />
          }
        </Link>
        <Link 
          to='/followers' 
          className='pagesNav__action'  
          onClick={() => setLocationChanged(!locationChanged)}
        >
          {pathname === 'followers'
            ? <PeopleAlt />
            : <PeopleAltOutlined />
          }
        </Link>
        <Link 
          to='/profile' 
          className='pagesNav__action' 
          onClick={() => setLocationChanged(!locationChanged)}
        >
          {pathname === 'profile'
            ? <Person />
            : <PermIdentityOutlined />
          }
        </Link>
        {rotate &&
          <Link className='pagesNav__action addPost' onClick={() => setModalOpened(true)}>
            <Add />
          </Link>
        }
      </div>
    </div>
  )
}

export default PagesNav