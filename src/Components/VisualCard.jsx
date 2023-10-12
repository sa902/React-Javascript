import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useModal from "../hooks/useModal";
import styled from "styled-components";
import Modal from "./Modal";
import CardTable from "./CardTable";
import ImageCarousel from "./ImageCarousel";

const BackgroundImage = styled.img`
width: 325px; 
height: 450px;
position: absolute;
`
const CardContent = styled.div`
width: 325px;
height: 425px;
position: relative;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
display: inline-flex;
`

const HouseImageContainer = styled.div`
max-width: 192px;
max-height: 233px;
border-radius: 5;
margin-right: 1em;
`
const TitleContainer = styled.div`
color: black;
font-size: 30px;
margin: 15px;
padding: 15px;
font-weight: 400;
word-wrap: break-word;
padding-bottom: 0.5em;
`

const VisualCard = ({ house }) => {
  const { modalOpen, close, open } = useModal();
  const { title, image_ids, bedrooms, bathrooms, price,description } = house;

  return (
    <>
    <motion.main>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className=""
        onClick={open}
      >
        <div class="centre">
          <BackgroundImage
            src="./CardBG.png"
            alt="Card Background"
          />
          <CardContent>
            <TitleContainer>
              {title}
            </TitleContainer>

            <HouseImageContainer>
              <img
                src={`https://trademe.tmcdn.co.nz/photoserver/med/${image_ids[0]}.jpg`}
                alt="House Image"
              />
            </HouseImageContainer>
            <CardTable
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              price={price}
            />
          </CardContent>
        </div>
      </motion.div>
    </motion.main>

    <AnimatePresence initial={false} mode={"wait"}>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
        >
            <h2>{title}</h2>
          <CardTable
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            price={price}
          ></CardTable>
          <h4>{description}</h4>
          <ImageCarousel images={image_ids}></ImageCarousel>
          </Modal>
      )}
    </AnimatePresence>
    </>
  );
};

export default VisualCard;
