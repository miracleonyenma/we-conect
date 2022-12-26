import '../styles/profileCard.css'
import { Link } from 'react-router-dom'

export default function ProfileCard({
  name, 
  coverImage, 
  profileImage, 
  bio, 
  employmentStatus, 
  country, 
  relationship,
  following,
  followers
}) {
  return (
    <div className='profileCard'>
      <img src={coverImage ? coverImage : 'assets/noCover.avif'} alt='cover'/>
      <div className='profileCard__profileImage'>
        <img src={profileImage ? profileImage : 'assets/noProfile.jpg'} alt='profile'/>
        <span>{name}</span>
      </div>
      <div className='profileCard__details'>
        <p>{bio}</p>
        <div className='profileCard__moreDetails'>
          <span>{country}</span>
          <span>{employmentStatus}</span>
          <span>{relationship}</span>
        </div>
        <div className='profileCard__follow'>
          <Link to='/followers'><span>{followers}</span> Followers</Link>
          <Link to='/following'><span>{following}</span> Following</Link>
        </div>
      </div>
    </div>
  )
}
