import userImg from '../user_icon.png'

function Comment(props) {
  const text = props.text

  return (
    <div>
      <img src={userImg} width="20" alt="User" />
      {text}
    </div>
  )
}

export default Comment
