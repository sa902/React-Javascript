import { useState } from "react";
import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body.body-no-scroll {
//     overflow: hidden;
//   }
// `;
// Centralizes modal control

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    document.body.classList.remove('body-no-scroll');
    setModalOpen(false)
  };
  const open = () =>{ 
    document.body.classList.add('body-no-scroll');
    setModalOpen(true)
  };

  return { modalOpen, close, open };
};

export default useModal;
