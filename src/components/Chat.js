import '../styles/chat.css'
import SendIcon from '@mui/icons-material/Send';
import { KeyboardArrowLeft } from '@mui/icons-material';

export default function Chat({name, image, setChat}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='chat'>
      <div className='chat__head'>
        <span onClick={() => setChat(false)}>
          <KeyboardArrowLeft />
        </span>
        <img src={image} alt="" className='chat__searchPalImage' />
        <span>{name}</span>
      </div>
      <div className='chat__chats'>
        <span>
          <span>{name}</span>
          <span>Some message</span>
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <span className="textarea" role="textbox" 
          contentEditable='true'
        >
        </span>
        <button>
          <SendIcon />
        </button>
      </form>
    </div>
  )
}
