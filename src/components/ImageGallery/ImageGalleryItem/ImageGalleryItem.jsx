import styled from 'styled-components';
import { ImageItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

const ImageCard = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImageGalleryItem = ({ webformatURL, alt, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <ImageItem>
      <ImageCard src={webformatURL} alt={alt} onClick={toggleModal} />
      {showModal && (
        <Modal modalImg={largeImageURL} closeModal={toggleModal} alt={alt} />
      )}
    </ImageItem>
  );
};
