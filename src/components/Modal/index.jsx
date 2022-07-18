import closeImg from '../../assets/close.svg'

import './styles.css'

import Modal from "react-modal";
import { useEffect } from 'react';

export function ModalContainer({ isOpen, onClose, card, text}) {
  useEffect(() => {

  },[isOpen])
  return (
  <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="content">
        <img src={card} alt="Descrição do livro" />
        <div className="text-button-content">
          <p className='text'>{text}</p>
          <div className="buttons">
            <a href="" className='a'>Comprar o Livro</a>
            <a href="https://chat.whatsapp.com/LhcTvtIfNp0Fbh8eOFPZz5"  target="_blank" className='a'>Grupo Whats</a>
          </div>
        </div>
      </div>
    <button 
      type="button" 
      onClick={onClose} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>
  
    </Modal>
  </>
  )
}