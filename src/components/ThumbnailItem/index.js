// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {image, updateImageId, activeStatus} = props
  const {id, thumbnailUrl, thumbnailAltText} = image

  const onImageClick = () => {
    updateImageId(id)
  }
  const opacityClass = activeStatus ? '' : 'opaque'
  return (
    <li>
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${opacityClass}`}
          onClick={onImageClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
