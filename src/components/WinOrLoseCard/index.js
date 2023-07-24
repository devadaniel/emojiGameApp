// Write your code here.

import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const altText = isWon ? 'win or lose' : 'win or lose'
  const winStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const image = isWon ? winImage : loseImage
  return (
    <div>
      <div className="win-or-lose-container">
        <div className="win-or-lose-card">
          <div className="win-or-lose-text">
            <h1 className="win-or-loose-heading">{winStatus}</h1>
            <p className="best-score">{scoreLabel}</p>
            <p className="score">{score}/12</p>
          </div>
          <div>
            <img src={image} alt={altText} className="win-image" />
          </div>
        </div>
        <button
          className="play-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
