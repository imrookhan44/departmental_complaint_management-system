import Carousel from "react-bootstrap/Carousel";
import "./../../styles/carousel.css";
function Carousel1() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={require("./../../assets/green_youth_movement.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/NAEAC_WARNES_SEMINAR.jpeg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/seminar_15-06-2022.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
