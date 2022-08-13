
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import items from "./imageData"

function BodyContent() {
  return (
    <div>
      <h2>Let us come together to share and Worship with the Lord</h2>
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