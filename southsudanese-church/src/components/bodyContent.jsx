
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import items from "./imageData"

function BodyContent() {
  return (
    <div>
      <Carousel useKeyboardArrows={true}>
        {items.map((image, index) => (
          <div >
            <img src={image} key ={index} alt={"pics"}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default BodyContent;