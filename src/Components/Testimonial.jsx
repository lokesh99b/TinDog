import DogsOne from '../assets/images/DogsPlayingone.jpg'
import DogsTwo from '../assets/images/DogsWithHuman.jpg'
import DogsThree from '../assets/images/DogsPlayingfive.jpg'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {


    return (
      <Carousel>
        <Carousel.Item>
          <img style={{height:'75vh', 'border-radius': '10px', objectFit: 'cover'}} src={DogsOne} className="d-block mx-lg-auto img-fluid"/>
          <Carousel.Caption>
            <h3>Bella the Terrier</h3>
            <p>Found my soulmate on TinDog. Happiest pup ever, thanks!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'75vh', 'border-radius': '10px', objectFit: 'cover'}} src={DogsTwo} className="d-block mx-lg-auto img-fluid"/>
          <Carousel.Caption>
            <div>
              <h3>Buddy the Husky</h3>
              <p>I wasn't the only one who found love.... AAUUUU!!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'75vh', 'border-radius': '10px', objectFit: 'cover'}} src={DogsThree} className="d-block mx-lg-auto img-fluid"/>
          <Carousel.Caption>
            <h3>Max the Labrador</h3>
            <p>
            Met my best friend on TinDog. Woofs of gratitude!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Testimonial
