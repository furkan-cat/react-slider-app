import React, { useState } from "react";
import SliderData from "./SliderData";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextSlide = () => {
    setCurrentImg(currentImg === slides.length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? slides.length - 1 : currentImg - 1);
  };

  return (
    <section className={classes["image-header"]}>
      <AiOutlineArrowLeft onClick={prevSlide} className={classes.left} />
      <AiOutlineArrowRight onClick={nextSlide} className={classes.right} />

      <div
        className={`${classes["image-left-right-box"]} ${classes["slide-left-right"]}`}
      >
        <img
          src={
            SliderData[
              currentImg - 1 === -1 ? SliderData.length - 1 : currentImg - 1
            ].image
          }
          alt="nature image"
          className={`${classes.images}`}
        />
      </div>

      <div className={`${classes["image-center-box"]}`}>
        <img
          src={SliderData[currentImg].image}
          className={`${classes.images}`}
        />
      </div>

      <div
        className={`${classes["image-left-right-box"]} ${classes["slide-left-right"]}`}
      >
        <img
          src={
            SliderData[
              currentImg + 1 === SliderData.length ? 0 : currentImg + 1
            ].image
          }
          alt="nature image"
          className={`${classes.images}`}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
