import { useEffect } from "react";
import { motion } from "framer-motion";
import {styled} from 'styled-components'
import Backdrop from "./Backdrop/";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalSheet = styled.div`
background-color: #fff;
width: clamp(50%, 700px, 90%);
// height: min(50%, 300px);
margin: auto;
padding: 0 2rem;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
`


const Modal = ({ handleClose, text }) => {


  return (
    <Backdrop onClick={handleClose}>
      <ModalSheet>
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className=""
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        </motion.div>
          <ModalText text={text} />
          <ModalText text={text} />
          <ModalText text={text} />
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </ModalSheet>

    </Backdrop>
  );
};

const ModalText = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
      expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
      eos id. Porro, culpa? Officiis, placeat?
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
