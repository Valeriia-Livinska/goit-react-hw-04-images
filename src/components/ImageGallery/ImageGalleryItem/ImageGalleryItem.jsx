import styled from 'styled-components';
import { ImageItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

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

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { webformatURL, alt, largeImageURL } = this.props;

    return (
      <ImageItem>
        <ImageCard src={webformatURL} alt={alt} onClick={this.toggleModal} />
        {this.state.showModal && (
          <Modal
            modalImg={largeImageURL}
            closeModal={this.toggleModal}
            alt={alt}
          />
        )}
      </ImageItem>
    );
  }
}
