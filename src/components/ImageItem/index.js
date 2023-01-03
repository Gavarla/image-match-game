import './index.css'

const ImageItem = props => {
  const {imageDetails, setScore} = props
  const {thumbnailUrl, id} = imageDetails

  const onButtonClick = () => {
    setScore(id)
  }
  return (
    <li className="image-item">
      <button className="button" type="button" onClick={onButtonClick}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
