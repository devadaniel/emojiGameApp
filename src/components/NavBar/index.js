// Write your code here.

import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameEnd} = props
  return (
    <div className="navbar-container">
      <div className="nav-bar-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="emoji-logo-heading">Emoji Game</h1>
      </div>
      {isGameEnd ? (
        ''
      ) : (
        <div className="score-nav-bar">
          <p className="score-title">Score: {currentScore}</p>
          <p className="top-score-title">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
