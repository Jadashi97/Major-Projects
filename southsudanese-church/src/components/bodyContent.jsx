// import React from "react";


// function BodyContent(){
//     return(
//         <div className="picslides">
//             <img alt="" src={require("../images/souths.jpg")}/>
//         </div>    
//     )
// }

// export default BodyContent;

import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img  className={("picslides")} alt="" src={require("../images/souths.jpg")}/>
      </Carousel.Item>
      <Carousel.Item>
      <img  className={("picslides")} alt="" src={require("../images/souths.jpg")}/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;