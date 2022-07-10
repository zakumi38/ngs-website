import React, { useState } from "react";
import Slider from "react-slick";
import FooterCarouselStyle from "./footer-carousel.module.sass";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

//Import Image
import Img1 from "../../../assets/footer-carousel/01.jpg";
import Img2 from "../../../assets/footer-carousel/02.jpg";
import Img3 from "../../../assets/footer-carousel/03.jpg";
import Img4 from "../../../assets/footer-carousel/04.jpg";
import Img5 from "../../../assets/footer-carousel/05.jpg";
import Img6 from "../../../assets/footer-carousel/06.jpg";
import Img7 from "../../../assets/footer-carousel/07.jpg";
import Img8 from "../../../assets/footer-carousel/08.jpg";
import Img9 from "../../../assets/footer-carousel/09.jpg";
import Img10 from "../../../assets/footer-carousel/10.jpg";

//Create image arrays for looping
let Images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

// Setting and Responsive for Slider
export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 452,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [toggleArrow, SetToggleArrow] = useState(Boolean);

  // Custom Arrow
  function SampleNextArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.nextArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        } `}
      >
        <MdOutlineKeyboardArrowRight
          onClick={onClick}
        ></MdOutlineKeyboardArrowRight>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.prevArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        }`}
      >
        <MdOutlineKeyboardArrowLeft
          onClick={onClick}
        ></MdOutlineKeyboardArrowLeft>
      </div>
    );
  }

  return (
    <div>
      <div className={FooterCarouselStyle.slider}>
        <Slider {...settings} className={FooterCarouselStyle.carouselBox}>
          {/* The UI */}
          {Images.map((image) => (
            <div key={image} className={FooterCarouselStyle.imgDiv}>
              <img
                className={FooterCarouselStyle.carouselImg}
                onMouseEnter={() => SetToggleArrow(true)}
                onMouseLeave={() => SetToggleArrow(false)}
                src={image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
