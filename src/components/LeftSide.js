import FollowersCard from './FollowCard'
import MiniprofileCard from './MiniProfileCard'
import "../styles/leftSide.css"
import { Link } from 'react-router-dom'

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div style={{position: 'sticky', top: 10}}>
        <Link to='/' className='logo'><h1>weConect</h1></Link>
        <MiniprofileCard/>
        <FollowersCard/>
      </div>
    </div>
  )
}

export default LeftSide