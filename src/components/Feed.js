import { useEffect } from 'react'
import Share from '../components/Share'
import '../styles/feed.css'
import Post from './Post'

export default function Feed() {

  const removeFeedPadding = (feed, initialWindowHeight) => {
    if(window.innerHeight + 50 < initialWindowHeight && window.innerWidth < 500){
      feed.style.paddingBottom = 0
    }
  }

  useEffect(() => {
    const initialWindowHeight = window.innerHeight
    const feed = document.getElementById('feedAlt')
    if('visualViewport' in window) {
      window.visualViewport.addEventListener('resize', () => removeFeedPadding(feed, initialWindowHeight))
    }
    return () => {
      window.visualViewport.removeEventListener('resize', () => removeFeedPadding(feed, initialWindowHeight))
    }
  }, [])

  return (
    <div className='feed scrollbar-hidden' id='feedAlt'>
      <Share />
      <Post 
        profileImg='/assets/profile.jpg'
        postedTime='21hrs'
        image = '/assets/postpic1.jpg'
        name= 'Tzuyu'
        text='andfanf ansdfl anf lanfl anfln aldnfa lndf sd'
        comment= "Happy New Year all friends! #2023"
        likes= {2300}
        comments={44}
        liked= {true}
      />
      <Post 
        profileImg='/assets/profile.jpg'
        postedTime='21hrs'
        image = '/assets/postpic1.jpg'
        name= 'Tzuyu'
        text='andfanf ansdfl anf lanfl anfln aldnfa lndf sd'
        comment= "Happy New Year all friends! #2023"
        likes= {2300}
        comments={44}
        liked= {true}
      />
      <Post 
        profileImg='/assets/profile.jpg'
        postedTime='21hrs'
        image = '/assets/postpic1.jpg'
        name= 'Tzuyu'
        text='andfanf ansdfl anf lanfl anfln aldnfa lndf sd'
        comment= "Happy New Year all friends! #2023"
        likes= {2300}
        comments={44}
        liked= {true}
      />
    </div>
  )
}