import styled from "styled-components";
import { motion } from "framer-motion";
const BackdropWrapper = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: #000000e3;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
overflow-y: hidden !important;
`
const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropWrapper
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropWrapper>
  );
};

export default Backdrop;
