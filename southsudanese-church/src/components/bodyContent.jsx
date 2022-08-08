
// import React, { useState } from 'react';
// import Carousel from 'react-responsive-carousel/Carousel';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="picslides"
//           src={require("../images/ss6.jpg")}
//           alt="First slide"
//         />
        // <img
        //   className="d-block w-100"
        //   src={require("../images/ss5.jpg")}
        //   alt="Second slide"
        // />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <img
//           className="d-block w-100"
//           src={require("../images/ss5.jpg")}
//           alt="Second slide"
//         /> */}
//       </Carousel.Item>
//       <Carousel.Item>
        // <img
        //   className="d-block w-100"
        //   src={require("../images/ss2.jpg")}
        //   alt="Third slide"
        // />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
        <img
          className="picslides"
          src={require("../images/ss6.jpg")}
          alt="First slide"
        />,
        
        <img
          className="d-block w-100"
          src={require("../images/ss5.jpg")}
          alt="Second slide"
        />,
        <img
          className="d-block w-100"
          src={require("../images/ss2.jpg")}
          alt="Third slide"
        />, 
];  

function ImageSlide() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlide;