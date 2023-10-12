import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  justify-content:center;
`;

const CarouselImage = styled(motion.img)`
max-width: 200px;
max-height:200px;
@media (min-width: 960px){
    max-width: 500px;
max-height:500px;
}
    height: auto;
  object-fit: cover;
`;

const CarouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageUrl = "https://trademe.tmcdn.co.nz/photoserver/plus/"
  const sanitisedImageURLS = images.map((image) => {
    return `${imageUrl}${image}.jpg`
  })
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      <CarouselButton className="prev" onClick={prevImage}>
        {'<'}
      </CarouselButton>
      <CarouselImage
        src={sanitisedImageURLS[currentImage]}
        alt={`Image ${currentImage + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <CarouselButton className="next" onClick={nextImage}>
        {'>'}
      </CarouselButton>
    </CarouselContainer>
  );
};

export default ImageCarousel;
