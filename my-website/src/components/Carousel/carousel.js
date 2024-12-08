import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import beach from "../../assets/img1.jpg";
import tek from "../../assets/img2.jpg";
import dorm from "../../assets/img3.jpg";
import night from "../../assets/img4.jpg";
import cherry from "../../assets/img5.jpg";

const CarouselSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={beach} alt="beach" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={tek} alt="campus" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={dorm} alt="dorm" />
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

export default CarouselSlide;