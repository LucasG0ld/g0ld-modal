declare module 'g0ld-modal' {
    import React from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      children: React.ReactNode;
    }
  
    const Modal: React.FC<ModalProps>;
  
    export default Modal;
  }