
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderData from "./sliderData";

function ImageSlide() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {SliderData.map((sliderData, index) => (
          <div className="slide">
            <img alt="pic" src={SliderData.image} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlide;