import { motion } from "framer-motion";
import { styled } from "styled-components";
import Backdrop from "./Backdrop/";
import CardTable from "../CardTable";
import Button from "../Button";
import ImageCarousel from "../ImageCarousel";

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

const ModalSheet = styled(motion.div)`
  background-color: #fff;
  width: clamp(50%, 700px, 90%);
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

const Modal = ({ handleClose, house }) => {
  const { bedrooms, bathrooms, price } = house;
  return (
    <Backdrop onClick={handleClose}>
        <ModalSheet
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
  <ModalContent>
          <h2>{house.title}</h2>
          <CardTable
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            price={price}
          ></CardTable>
          <h4>{house.description}</h4>
          <ImageCarousel images={house.image_ids}></ImageCarousel>
        </ModalContent>

        <Button clickFn={handleClose} text={"close"}></Button>

        </ModalSheet>
      

    </Backdrop>
  );
};

export default Modal;
