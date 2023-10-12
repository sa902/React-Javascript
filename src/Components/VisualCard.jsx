import CardTable from "./CardTable";
import { AnimatePresence, motion } from "framer-motion";

import useModal from "../hooks/useModal";
import Modal from "./Modal";
const handleCardClick = () => {
  console.log("handled click");
};
export default function VisualCard({ house }) {
  const { modalOpen, close, open } = useModal();
  const { title, image_ids, bedrooms, bathrooms, price } = house;
  return (
    <>
      <motion.main>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          <div
            style={{ display: "flex", justifyContent: "center" }}
            onClick={handleCardClick}
          >
            <img
              style={{ width: 325, height: 450, position: "absolute" }}
              src="./CardBG.png"
            ></img>

            <div
              style={{
                width: 325,
                height: 425,
                position: "relative",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: 30,
                  fontFamily: "Inter",
                  margin: 15,
                  padding: 15,
                  fontWeight: "400",
                  wordWrap: "break-word",
                  paddingBottom: "0.5em",
                  fontFamily: "Patrick Hand",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  maxWidth: 192,
                  maxHeight: 233,
                  background: "",
                  borderRadius: 5,
                  marginRight: "1em",
                }}
              >
                <img
                  src={`https://trademe.tmcdn.co.nz/photoserver/med/${image_ids[0]}.jpg`}
                ></img>
              </div>
              <CardTable
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                price={price}
              ></CardTable>
            </div>
          </div>
        </motion.div>
      </motion.main>
      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={title}
            house={house}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}
