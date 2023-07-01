import './index.css'

const Images = props => {
  const {each, startingTheGame} = props
  const startGame = () => {
    startingTheGame(each)
  }

  const lowerId = each.id.toLowerCase()
  return (
    <button
      type="button"
      className="image-button"
      onClick={startGame}
      data-testid={`${lowerId}Button`}
    >
      <img src={each.imageUrl} alt={each.id} className="image" />
    </button>
  )
}
export default Images
