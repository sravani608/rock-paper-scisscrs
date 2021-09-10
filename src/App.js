import {Component} from 'react'
import './App.css'
import Popup from 'reactjs-popup'
import {GrFormClose} from 'react-icons/gr'
import Buttons from './Components/Buttons'
import {
  AppContainer,
  Header,
  NamesContainer,
  Name,
  ScoreContainer,
  ScoreTitle,
  Score,
  ButtonContainer,
  ButtonImage,
  ResultContainer,
  ResultButtonContainer,
  Result,
  ParticipantContainer,
  PlayAgain,
  ModalContainer,
  ImageContainer,
  PopupImage,
  CloseButton,
  PopupContainer,
} from './Components/styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    yourId: choicesList[0].id,
    opponentId: choicesList[0].id,
    result: '',
    isPlayAgainClicked: true,
  }

  changeYourId = id => {
    const {score} = this.state
    const oppId = choicesList[Math.floor(Math.random() * 2)].id
    const yourId = id
    let marks = score
    let output = ''

    if (yourId === 'ROCK') {
      if (oppId === 'SCISSORS') {
        output = 'YOU WON'
        marks += 1
      } else if (oppId === 'PAPER') {
        output = 'YOU LOSE'
        marks -= 1
      } else {
        output = 'IT IS DRAW'
      }
    } else if (yourId === 'SCISSORS') {
      if (oppId === 'ROCK') {
        output = 'YOU LOSE'
        marks -= 1
      } else if (oppId === 'PAPER') {
        output = 'YOU WON'
        marks += 1
      } else {
        output = 'IT IS DRAW'
      }
    } else if (yourId === 'PAPER') {
      if (oppId === 'SCISSORS') {
        output = 'YOU LOSE'
        marks -= 1
      } else if (oppId === 'ROCK') {
        output = 'YOU WON'
        marks += 1
      } else {
        output = 'IT IS DRAW'
      }
    }

    this.setState({yourId: id, opponentId: oppId, result: output, score: marks})
    this.setState(prevState => ({
      isPlayAgainClicked: !prevState.isPlayAgainClicked,
    }))
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      isPlayAgainClicked: !prevState.isPlayAgainClicked,
    }))
  }

  ReactPopUp = () => (
    <PopupContainer>
      <Popup
        modal
        trigger={
          <button className="button" type="button">
            Rules
          </button>
        }
      >
        {close => (
          <>
            <ModalContainer>
              <ImageContainer>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ImageContainer>
              <CloseButton onClick={() => close()}>{GrFormClose}</CloseButton>
            </ModalContainer>
          </>
        )}
      </Popup>
    </PopupContainer>
  )

  renderHomePage = () => (
    <ButtonContainer>
      {choicesList.map(eachItem => (
        <Buttons
          key={eachItem.id}
          data={eachItem}
          changeYourId={this.changeYourId}
        />
      ))}
    </ButtonContainer>
  )

  renderResults = () => {
    const {yourId, opponentId, result} = this.state
    const yourChoice = choicesList.filter(item => item.id === yourId)
    const opponentChoice = choicesList.filter(item => item.id === opponentId)
    console.log(yourChoice)
    console.log(opponentChoice)
    return (
      <ResultContainer>
        <ResultButtonContainer>
          <ParticipantContainer>
            <Name>You</Name>
            <ButtonImage src={yourChoice[0].image} alt="your choice" />
          </ParticipantContainer>
          <ParticipantContainer>
            <Name>Opponent</Name>
            <ButtonImage src={opponentChoice[0].image} alt="opponent choice" />
          </ParticipantContainer>
        </ResultButtonContainer>
        <Result>{result}</Result>
        <PlayAgain onClick={this.onClickPlayAgain}>PLAY AGAIN</PlayAgain>
      </ResultContainer>
    )
  }

  render() {
    const {score, isPlayAgainClicked} = this.state
    return (
      <AppContainer>
        <Header>
          <NamesContainer>
            <Name>
              ROCK <br />
              <br />
              PAPER <br />
              <br />
              SCISSORS
            </Name>
          </NamesContainer>
          <ScoreContainer>
            <ScoreTitle>Score</ScoreTitle>
            <Score>{score}</Score>
          </ScoreContainer>
        </Header>
        {isPlayAgainClicked ? this.renderHomePage() : this.renderResults()}
        {this.ReactPopUp()}
      </AppContainer>
    )
  }
}

export default App
