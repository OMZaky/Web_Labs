import { useState } from 'react'
import CommentInput from './CommentInput.jsx'
import Comments from './Comments.jsx'

function App() {
  const [comments, setComments] = useState([
    { text: 'Nice page!' },
    { text: 'Thanks for sharing.' },
  ])

  return (
    <>
      <h1>Comments</h1>
      <CommentInput comments={comments} setComments={setComments} />
      <Comments comments={comments} />
    </>
  )
}

export default App
