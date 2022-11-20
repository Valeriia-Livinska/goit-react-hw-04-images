import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.tags}
          />
        );
      })}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired
  ).isRequired,
};
