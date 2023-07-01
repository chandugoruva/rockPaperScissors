import './App.css'
import {useState} from 'react'
import Images from './components/Images'
import PopupReact from './components/Popup'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [isStart, setStart] = useState(false)
  const [clickedImage, setImage] = useState()
  const [score, setScore] = useState(0)
  const [storeClickedData, setData] = useState()
  const [opponentImage, setOpponent] = useState()
  const [result, setResult] = useState()
  console.log(storeClickedData)
  const startingTheGame = each1 => {
    setStart(true)
    setImage(each1.imageUrl)
    setData(each1)
    const shuffledImages = Math.floor(Math.random() * choicesList.length)
    if (choicesList[shuffledImages].id === 'PAPER' && each1.id === 'SCISSORS') {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU WON')
      setScore(prevState => prevState + 1)
    } else if (
      choicesList[shuffledImages].id === 'SCISSORS' &&
      each1.id === 'PAPER'
    ) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU LOSE')

      setScore(prevState => prevState - 1)
    } else if (
      choicesList[shuffledImages].id === 'ROCK' &&
      each1.id === 'PAPER'
    ) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU WON')
      setScore(prevState => prevState + 1)
    } else if (
      choicesList[shuffledImages].id === 'PAPER' &&
      each1.id === 'ROCK'
    ) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU LOSE')
      setScore(prevState => prevState - 1)
    } else if (
      choicesList[shuffledImages].id === 'ROCK' &&
      each1.id === 'SCISSORS'
    ) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU LOSE')
      setScore(prevState => prevState - 1)
    } else if (
      choicesList[shuffledImages].id === 'SCISSORS' &&
      each1.id === 'ROCK'
    ) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('YOU WON')
      setScore(prevState => prevState + 1)
    } else if (choicesList[shuffledImages].id === each1.id) {
      setOpponent(choicesList[shuffledImages].imageUrl)
      setResult('IT IS DRAW')
    }
  }
  const changeGame = () => {
    setStart(false)
  }
  const beforeGame = () => (
    <div className="images-div">
      {choicesList.map(each => (
        <Images each={each} key={each.id} startingTheGame={startingTheGame} />
      ))}
    </div>
  )
  const afterGameStart = () => (
    <div className="image-div">
      <div className="images-div">
        <div className="image-div">
          <p className="paragraph">You</p>
          <img src={clickedImage} alt="your choice" className="clickedImage" />
        </div>
        <div className="image-div">
          <p className="paragraph">Opponent</p>
          <img
            src={opponentImage}
            alt="opponent choice"
            className="clickedImage"
          />
        </div>
      </div>
      <p className="result-paragraph">{result}</p>
      <button type="button" onClick={changeGame} className="button">
        play again
      </button>
    </div>
  )

  return (
    <div className="bg-color">
      <div className="score-div">
        <div>
          <h1 className="paragraph">
            Rock <br /> Paper <br /> Scissors
          </h1>
        </div>
        <div className="score-subDiv">
          <p className="score-paragraph">Score</p>
          <p className="score">{score}</p>
        </div>
      </div>

      {isStart ? afterGameStart() : beforeGame()}

      <PopupReact />
    </div>
  )
}

export default App
