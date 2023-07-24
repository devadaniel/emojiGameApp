/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
// Write your code here
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojiList: [],
    isGameEnd: false,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojiList} = this.state

    const isEmojiPresent = clickedEmojiList.includes(id)
    console.log(isEmojiPresent)
    const clickedEmojisLength = clickedEmojiList.length
    console.log(clickedEmojisLength)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojiList: [...previousState.clickedEmojiList, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojiList: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinOrLossCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojiList.length}
      />
    )
  }

  renderEmojiCard = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-images-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            eachEmojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameEnd, topScore, clickedEmojiList} = this.state
    const currentScore = clickedEmojiList.length
    return (
      <div className="game-container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        <div className="game-body-container">
          {isGameEnd ? this.renderWinOrLossCard() : this.renderEmojiCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
