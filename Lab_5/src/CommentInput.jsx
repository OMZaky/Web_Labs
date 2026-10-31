import { useState } from 'react'

function CommentInput(props) {
  const comments = props.comments
  const setComments = props.setComments
  const [input, setInput] = useState('')

  function saveInputText(event) {
    setInput(event.target.value)
  }

  function addComment() {
    setComments([...comments, { text: input }])
    setInput('')
  }

  return (
    <div>
      <input
        placeholder="Write a comment"
        size="30"
        value={input}
        onChange={saveInputText}
      />
      <button onClick={addComment}>Post</button>
    </div>
  )
}

export default CommentInput
