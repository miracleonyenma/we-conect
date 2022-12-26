import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Feed from '../components/Feed'
import FollowCard from '../components/FollowCard'
import ProfileCard from '../components/ProfileCard'
import RightSide from '../components/RightSide'
import ShareModal from '../components/ShareModal'
import '../styles/profile.css'

export default function Profile({setModalOpened, modalOpened}) {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <div className='profile'>
      <div className='profile__left'>
        <Link to='/' className='logo'><h1>weConect</h1></Link>
        <FollowCard />
      </div>
      <div>
        <ProfileCard 
          name='Tammibriggs'
          coverImage='assets/profile.jpg'
          profileImage='assets/profile.jpg'
          bio='Software developer. I gat the skill and enthusiasm 💪🏼 | Technical writer with over 30 published articles | Currently working on creating my start-up.'
          employmentStatus='Self-employed'
          country='Nigeria'
          relationship='Single'
          followers={30}
          following={20}
        />
        <Feed />
      </div>
      <RightSide setModalOpened={setModalOpened} />
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> 
    </div>
  )
}
