import { useEffect } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import Backdrop from "./Backdrop/";
import CardTable from "../CardTable";
import Button from "../Button";

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
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ handleClose, text, house }) => {
  const { bedrooms, bathrooms, price } = house;
  return (
    <Backdrop onClick={handleClose}>
      <ModalSheet>
        <motion.div
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className=""
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        ></motion.div>
        <ModalContent>
          <h3>{house.title}</h3>
          <CardTable
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            price={price}
          ></CardTable>
          <h5>{house.description}</h5>
        </ModalContent>

        <Button onClick={handleClose} text={"close"}></Button>
      </ModalSheet>
    </Backdrop>
  );
};

// const ModalText = ({ text,house }) => (

// );

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className=""
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
