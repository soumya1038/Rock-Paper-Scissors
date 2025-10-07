const PlayingCart = props => {
  const {eachOption, onSelectOption} = props
  const {imageUrl, id} = eachOption

  const onclickButton = () => onSelectOption(id)

  return (
    <li>
      <button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onclickButton}
      >
        <img src={imageUrl} alt={id} className="button-image" />
      </button>
    </li>
  )
}

export default PlayingCart
