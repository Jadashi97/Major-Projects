
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import items from "./imageData";
import { Slide } from "react-slideshow-image";


// const items = [

//   "/Users/nyarjijada/Desktop/Major-projects/southsudanese-church/src/images/ss1.jpg",

//   "/images/ss1.jpg",

//   "images/ss5.jpg",
  
//   "images/ss6.jpg",
  
//   "images/ss3.jpg",
  
//   "images/ss11.jpg"
// ]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const url = "src/images";

function BodyContent() {
  return (
    <div>
      <h2>Let us come together to share and Worship with the Lord</h2>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${url})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${url})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${url})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>



    {/* <Carousel useKeyboardArrows={true}>
        {items.map((image, index) => (
          <div >
            <img src={image} key ={index} alt={"pics"}/>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
}
export default BodyContent;

