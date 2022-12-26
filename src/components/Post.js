import { useState } from 'react'
import '../styles/post.css'

const Post = ({
  name,  
  postedTime,
  profileImg, 
  text, 
  image, 
  liked, 
  likes, 
  loggedIn=true
}) => {

  const comments = [
    {
      comment: 'This is a comment', 
      id: 1, 
      userImage: '/assets/profile.jpg', 
      timestamp: '2 days',
      username: 'Tammibriggs'
    },
    {
      comment: 'This is a comment', 
      id: 2, 
      userImage: '/assets/profile.jpg', 
      timestamp: '2 days',
      username: 'Tammibriggs'
    },
  ]
  const [comment, setComment] = useState('')
  const [openComment, setOpenComment] = useState(false)

  const sendComment = () => {}

  return (
    <div className="post">
      <div className='post__head'>
        <img src={profileImg} alt='profile'/>
        <span>
          <span className='post__posterName'>{name}</span>
          <span>{postedTime}</span>
        </span>
      </div>  
      <p>{text}</p>
      <img src={image} alt="" />

      <div className="postReact">
        <span>
          <img src={liked? '/assets/like.png': '/assets/notlike.png'} alt="" />
          {likes}
        </span>
        <span onClick={() => setOpenComment(!openComment)}>
          <img src='/assets/comment.png' alt="" />
          {comments.length}
        </span>
      </div>

      {openComment &&
        <div>
          {/* input box for adding comment */}
          {loggedIn && (
            <form className='post__addComment'>
              <input 
                type='text'
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder='Add a comment...'
              />
              <button 
                type='submit' 
                disabled={!comment.trim()} 
                onClick={sendComment}
              >Post</button>
            </form>
          )}

          {/* comments */}
          {comments.length > 0 && (
            <div className='post__comments'>
              {comments.map(comment => (
                <div key={comment.id} className='post__comment'>
                  <img 
                    src={comment.userImage} 
                    alt='commenter'/>
                    <div>
                      <span>{comment.username}</span>{' '}
                      <span>{comment.timestamp}</span><br />
                      <p>{comment.comment}</p>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
       }
    </div>
  )
}

export default Post