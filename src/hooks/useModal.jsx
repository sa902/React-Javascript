import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    console.log('inside our close function')
    document.body.classList.remove("body-no-scroll");
    setModalOpen(false);
  };
  const open = () => {
    document.body.classList.add("body-no-scroll");
    setModalOpen(true);
  };

  return { modalOpen, close, open };
};

export default useModal;
