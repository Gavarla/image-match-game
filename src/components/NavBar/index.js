import './index.css'

const NavBar = props => {
  const {timer, score} = props
  return (
    <li className="items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <div className="score-section">
        <p className="score">
          Score: <span className="score-count">{score}</span>
        </p>
        <div className="timer-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer">{timer} sec</p>
        </div>
      </div>
    </li>
  )
}

export default NavBar
