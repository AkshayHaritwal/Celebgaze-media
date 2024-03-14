import React from "react";
import './Reviews.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="reviews container">
      <Carousel responsive={responsive}>
        <div className="review-content">
          <h3>Mausumi Bhattacharjee</h3>
          <h5>August 27,2021</h5>
          <p>
            My app is the one single point that all my fans can access for the
            most customized experience. My goal is to enable them to know me up,
            close and personal and bridge the gap between me and them. The most
            amazing thing about this is they can have access to me and my most
            premium content. Come join me in my journey and be a part of my
            world.
          </p>
          <h5 className="rating"><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i></h5>
        </div>
        <div className="review-content">
          <h3>Ankita deve</h3>
          <h5>September 04,2021</h5>
          <p>
            My app is the one single point that all my fans can access for the
            most customized experience. My goal is to enable them to know me up,
            close and personal and bridge the gap between me and them. The most
            amazing thing about this is they can have access to me and my most
            premium content. Come join me in my journey and be a part of my
            world.
          </p>
          <h5 className="rating"><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i></h5>

        </div>

        <div className="review-content">
          <h3>Akshay haritwal</h3>
          <h5>march 13,2024</h5>
          <p>
            My app is the one single point that all my fans can access for the
            most customized experience. My goal is to enable them to know me up,
            close and personal and bridge the gap between me and them. The most
            amazing thing about this is they can have access to me and my most
            premium content. Come join me in my journey and be a part of my
            world.
          </p>
          <h5 className="rating"><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i><i className="fa-solid fa-star" ></i></h5>

        </div>

      </Carousel>
      
    </div>
  );
};

export default Reviews;
