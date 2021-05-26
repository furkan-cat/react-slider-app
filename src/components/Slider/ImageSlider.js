import React, { useState } from "react";
import SliderData from "./SliderData";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextSlide = () => {
    setCurrentImg(currentImg === slides.length - 1 ? 0 : currentImg + 1);
    console.log(`next slide ${currentImg}`);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? slides.length - 1 : currentImg - 1);
    console.log(`prev slide ${slides.length}`);
  };

  return (
    <section className={classes["image-header"]}>
      <AiOutlineArrowLeft onClick={prevSlide} className={classes.left} />
      <AiOutlineArrowRight onClick={nextSlide} className={classes.right} />

      {SliderData.map((slide, i) => {
        return (
          <div
            className={
              i === currentImg ? `${classes["slide-left-right"]} ${classes.active}` : null
            }
            key={i}
          >
            {i === currentImg && (
              <img
                src={slide.image}
                alt={i}
                alt="nature image"
                className={classes["image-left-right"]}
              />
            )}
          </div>
        );
      })}

      {SliderData.map((slide, i) => {
        return (
          <div
            className={
              i === currentImg
                ? `${classes.slide} ${classes.active}`
                : classes.slide
            }
            key={i}
          >
            {i === currentImg && (
              <img src={slide.image} alt={i} className={classes.image} />
            )}
          </div>
        );
      })}

      {SliderData.map((slide, i) => {
        return (
          <div
            className={
              i
                ? `${classes["slide-left-right"]} ${classes.active}`
                : classes.slide
            }
            key={i}
          >
            {i === currentImg + 1 && (
              <img
                src={slide.image}
                alt={i}
                className={classes["image-left-right"]}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
