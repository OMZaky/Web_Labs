import userImg from '../user_icon.png'

function ChatMessage(props) {
  const message = props.message
  const sender = props.sender

  if (sender === 'user') {
    return (
      <div>
        {message}
        <img src={userImg} width="20" alt="User" />
      </div>
    )
  }
}

export default ChatMessage
