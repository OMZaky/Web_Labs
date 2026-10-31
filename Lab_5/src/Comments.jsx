import Comment from './Comment.jsx'

function Comments(props) {
  const comments = props.comments

  const commentComponents = comments.map((comment, index) => {
    return <Comment key={index} text={comment.text} />
  })

  return <>{commentComponents}</>
}

export default Comments
