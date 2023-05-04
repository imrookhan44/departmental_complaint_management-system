import Carousel from "react-bootstrap/Carousel";
import "./../../styles/carousel.css";
function Carousel1() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={require("./../../assets/MUI_ The React component library you always wanted_files/556.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/MUI_ The React component library you always wanted_files/557.jpeg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/MUI_ The React component library you always wanted_files/558.jpeg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={require("./../../assets/MUI_ The React component library you always wanted_files/559.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/MUI_ The React component library you always wanted_files/560.jpeg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./../../assets/MUI_ The React component library you always wanted_files/568.jpeg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
