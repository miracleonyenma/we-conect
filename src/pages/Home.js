import '../styles/home.css'
import Feed from '../components/Feed'
import RightSide from '../components/RightSide'
import LeftSide from '../components/LeftSide'
import ShareModal from '../components/ShareModal'
import { useEffect } from 'react'
import PagesNav from '../components/PagesNav'

export default function Home({setModalOpened, modalOpened}) {

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <div className='home'>
      <PagesNav rotate={true} setModalOpened={setModalOpened} />
      <LeftSide />
      <Feed />
      <RightSide setModalOpened={setModalOpened} />
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> 
      <PagesNav />
    </div>
  )
}
