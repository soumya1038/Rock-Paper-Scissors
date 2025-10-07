import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import PlayingCart from '../PlayingCart/PlayingCart'

import 'reactjs-popup/dist/index.css'
import {
  GameContainer,
  Header,
  Title,
  ScoreCard,
  ScoreLabel,
  ScoreText,
  GameChoices,
  GameResultContainer,
  PlayerChoice,
  PlayerLabel,
  ResultImage,
  ResultText,
  PlayAgainButton,
  RulesButton,
  PopupContainer,
  RulesImage,
  CloseButton,
} from './StyledComponent'

const gameStatus = {
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
  initial: 'INITIAL',
}

class RenderGame extends Component {
  state = {
    isWin: gameStatus.initial,
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

  playAgain = () => {
    this.setState({
      clicked: false,
      isWin: gameStatus.initial,
      selectedImageUrl: '',
      opponentImageUrl: '',
    })
  }

  renderWinView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state
    return (
      <>
        <GameResultContainer>
          <PlayerChoice>
            <PlayerLabel>YOU</PlayerLabel>
            <ResultImage src={selectedImageUrl} alt="your choice" />
          </PlayerChoice>
          <PlayerChoice>
            <PlayerLabel>OPPONENT</PlayerLabel>
            <ResultImage src={opponentImageUrl} alt="opponent choice" />
          </PlayerChoice>
        </GameResultContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
    )
  }

  renderLoseView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state

    return (
      <>
        <GameResultContainer>
          <PlayerChoice>
            <PlayerLabel>YOU</PlayerLabel>
            <ResultImage src={selectedImageUrl} alt="your choice" />
          </PlayerChoice>
          <PlayerChoice>
            <PlayerLabel>OPPONENT</PlayerLabel>
            <ResultImage src={opponentImageUrl} alt="opponent choice" />
          </PlayerChoice>
        </GameResultContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
    )
  }

  renderDrawView = () => {
    const {selectedImageUrl, opponentImageUrl} = this.state

    return (
      <>
        <GameResultContainer>
          <PlayerChoice>
            <PlayerLabel>YOU</PlayerLabel>
            <ResultImage src={selectedImageUrl} alt="your choice" />
          </PlayerChoice>
          <PlayerChoice>
            <PlayerLabel>OPPONENT</PlayerLabel>
            <ResultImage src={opponentImageUrl} alt="opponent choice" />
          </PlayerChoice>
        </GameResultContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
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
      <GameContainer>
        <Header>
          <Title>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Title>
          <ScoreCard>
            <ScoreLabel>Score</ScoreLabel>
            <ScoreText>{score}</ScoreText>
          </ScoreCard>
        </Header>

        {!clicked && (
          <GameChoices>
            {choicesList.map(each => (
              <PlayingCart
                eachOption={each}
                key={each.id}
                onSelectOption={this.onSelectOption}
              />
            ))}
          </GameChoices>
        )}

        {this.renderAllComponent()}

        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default RenderGame
