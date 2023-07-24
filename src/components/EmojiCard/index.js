// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = eachEmojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="each-emoji-list ">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="each-emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
