import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  closeByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  render() {
    const { modalImg, alt, closeModal } = this.props;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <img src={modalImg} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
