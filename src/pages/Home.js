import '../styles/home.css'
import Feed from '../components/Feed'
import RightSide from '../components/RightSide'
import LeftSide from '../components/LeftSide'
import ShareModal from '../components/ShareModal'
import { useEffect } from 'react'

export default function Home({setModalOpened, modalOpened}) {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <div className='home'>
      <LeftSide />
      <Feed />
      <RightSide setModalOpened={setModalOpened} />
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> 
    </div>
  )
}
