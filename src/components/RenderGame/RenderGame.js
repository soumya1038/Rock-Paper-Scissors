import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import PlayingCart from '../PlayingCart/PlayingCart'

import 'reactjs-popup/dist/index.css'

import {ScoreText} from './StyledComponent'

const gameStatus = {
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
  inetial: 'INNITIAL',
}

class RenderGame extends Component {
  state = {
    isWin: gameStatus.inetial,
    score: 0,
    selectedImageUrl: '',
    opponentImageUrl: '',
    clicked: false,
  }

  onSelectOption = id => {
    const {choicesList} = this.props

    const randomOption =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    // console.log(randomOption.id)

    const selectedObject = choicesList.filter(each => each.id === id)
    const {imageUrl} = selectedObject[0]
    this.setState({clicked: true, selectedImageUrl: imageUrl})

    this.setState({opponentImageUrl: randomOption.imageUrl})
    if (id === 'ROCK' && randomOption.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isWin: gameStatus.win,
      }))
      // console.log('win')
    } else if (id === 'ROCK' && randomOption.id === 'ROCK') {
      this.setState({isWin: gameStatus.draw})
      // console.log('Draw')
    } else if (id === 'PAPER' && randomOption.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isWin: gameStatus.win,
      }))
      // console.log('win')
    } else if (id === 'PAPER' && randomOption.id === 'PAPER') {
      this.setState({isWin: gameStatus.draw})
      this.setState({isWin: gameStatus.draw})
      console.log('Draw')
    } else if (id === 'SCISSORS' && randomOption.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isWin: gameStatus.win,
      }))
      // console.log('win')
    } else if (id === 'SCISSORS' && randomOption.id === 'SCISSORS') {
      this.setState({isWin: gameStatus.draw})
      // console.log('Draw')
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isWin: gameStatus.lose,
      }))
      // console.log('loose')
    }
  }

  playAgamin = () => {
    this.setState({
      clicked: false,
      isWin: gameStatus.inetial,
      selectedImageUrl: '',
      opponentImageUrl: '',
    })
  }

  renderWinView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state
    return (
      <div>
        <div>
          <p>YOU</p>
          <img
            src={selectedImageUrl}
            alt="your choice"
            className="button-image"
          />
        </div>
        <div>
          <p>OPPONENT</p>
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="button-image"
          />
        </div>
        <p>YOU WON</p>
        <button type="button" onClick={this.playAgamin}>
          Play Again
        </button>
      </div>
    )
  }

  renderLoseView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state

    return (
      <div>
        <div>
          <p>YOU</p>
          <img
            src={selectedImageUrl}
            alt="your choice"
            className="button-image"
          />
        </div>
        <div>
          <p>OPPONENT</p>
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="button-image"
          />
        </div>
        <p>YOU LOSE</p>
        <button type="button" onClick={this.playAgamin}>
          Play Again
        </button>
      </div>
    )
  }

  renderDrawView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state

    return (
      <div>
        <div>
          <p>YOU</p>
          <img
            src={selectedImageUrl}
            alt="your choice"
            className="button-image"
          />
        </div>
        <div>
          <p>OPPONENT</p>
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="button-image"
          />
        </div>
        <p>IT IS DRAW</p>
        <button type="button" onClick={this.playAgamin}>
          Play Again
        </button>
      </div>
    )
  }

  renderAllComponent = () => {
    const {isWin} = this.state

    switch (isWin) {
      case 'WIN':
        return this.renderWinView()
      case 'LOSE':
        return this.renderLoseView()
      case 'DRAW':
        return this.renderDrawView()
      default:
        return null
    }
  }

  render() {
    const {choicesList} = this.props
    const {score, clicked} = this.state
    return (
      <>
        <div>
          <h1>Rock Paper Scissors</h1>
          <div>
            <p>Score</p>
            <ScoreText>{score}</ScoreText>
          </div>
        </div>
        {!clicked && (
          <div>
            <ul>
              {choicesList.map(each => (
                <PlayingCart
                  eachOption={each}
                  key={each.id}
                  onSelectOption={this.onSelectOption}
                />
              ))}
            </ul>
          </div>
        )}
        {this.renderAllComponent()}
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              RULES
            </button>
          }
        >
          {close => (
            <>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </>
          )}
        </Popup>
      </>
    )
  }
}

export default RenderGame
