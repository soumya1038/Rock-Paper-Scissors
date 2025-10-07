import './PlayingCart.css'

const PlayingCart = props => {
  const {eachOption, onSelectOption} = props
  const {imageUrl, id} = eachOption

  const onclickButton = () => onSelectOption(id)

  return (
    <li className="choice-item">
      <button
        className="choice-button"
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onclickButton}
      >
        <img className="choice-image" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default PlayingCart
