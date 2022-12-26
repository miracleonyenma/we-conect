import '../styles/followCard.css'
import { Followers } from '../Data/FollowersData'
import { useState } from 'react'

const FollowCard = ({pathname}) => {

  const [selected, setSelected] = useState(pathname || 'followers')

  return (
    <div className="followCard">
      <div className='followCard__head'>
        <span 
          style={{
            borderBottom: `${selected === 'followers' ? '1px solid var(--p-color2)' : 'none'}`, 
          }}
          onClick={() => setSelected('followers')}>
          Follwers
        </span>
        <span 
          style={{
            borderBottom: `${selected === 'following' ? '1px solid var(--p-color2)' : 'none'}`, 
          }}
          onClick={() => setSelected('following')}>
          Following
        </span>
      </div>
      {selected === 'followers' 
        ? 
          <div className='followCard__list scrollbar-hidden'>
            {Followers.map((follower, id)=>{
              return(
                <div className="followCard__follow" key={id}>
                  <div>
                    <img src={follower.img} alt="" className='followImage' />
                    <span>{follower.name}</span>
                  </div>
                  <span className='followCard__action'>
                    Follow
                  </span>
                </div>
              )
            })}
          </div> 
        : 
          <div className='followCard__list scrollbar-hidden'>
            {Followers.map((follower, id)=>{
              return(
                <div className="followCard__follow" key={id}>
                  <div>
                    <img src={follower.img} alt="" className='followImage' />
                    <span>{follower.name}</span>
                  </div>
                  <span className='followCard__action'>
                    Unfollows
                  </span>
                </div>
              )
            })}
          </div>
      }
        
    </div>
  )
}

export default FollowCard