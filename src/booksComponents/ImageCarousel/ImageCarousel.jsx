import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  setPosterPreview: PropTypes.func,
  variant: PropTypes.string,
};

export default function ImageCarousel({
  images = [],
  setPosterPreview,
  variant,
}) {
  let imagesArr = [];

  if (variant === "post" || variant === "fullPost") {
    imagesArr = images.map(({ url }) => url);
  } else {
    imagesArr = images;
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDelete = () => {
    if (imagesArr.length === 0) return;

    const newArr = imagesArr.filter((_, index) => index !== selectedIndex);
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : 0;

    setPosterPreview(newArr);
    setSelectedIndex(newIndex);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + imagesArr.length) % imagesArr.length
    );
  };

  const variantFn = (type) => {
    switch (type) {
      case "post":
        return {
          maxHeight: "180px",
        };
      case "preview":
        return {
          maxWidth: "300px",
          height: "300px",
        };
      case "fullPost":
        return {
          height: "400px",
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      key={selectedIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        ...variantFn(variant),
      }}
    >
      {variant === "preview" && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "11",
          }}
        >
          <IconButton onClick={handleDelete} sx={{ bgcolor: "#00000040" }}>
            <CloseIcon fontSize="inherit" color="error" />
          </IconButton>
        </div>
      )}

      {imagesArr.length > 1 && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <IconButton onClick={prevImage}>
            <ArrowCircleLeftIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={nextImage}>
            <ArrowCircleRightIcon fontSize="large" />
          </IconButton>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: `url(${imagesArr[selectedIndex]})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: variant === "fullPost" ? "contain" : "cover",
            backgroundRepeat: "no-repeat",
            display: "block",
            borderRadius: variant === "post" ? "10px 10px 0 0" : "10px",
          }}
        />
      </AnimatePresence>
    </motion.div>
  );
}
