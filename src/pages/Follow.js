import { useEffect, useState } from 'react'
import FollowCard from '../components/FollowCard'
import '../styles/follow.css'

export default function Follow() {

  const [pathname, setPathname] = useState('')
  
  useEffect(() => {
    window.scrollTo({top: 0})
    const pathname = window.location.pathname
    setPathname(pathname.slice(1, pathname.length))
  }, [])

  return (
    <div className='follow'>
      <FollowCard pathname={pathname}/>
    </div>
  )
}
