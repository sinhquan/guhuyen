import React from 'react'
import Carousel from '../../../node_modules/react-bootstrap/Carousel'
import {Link} from 'gatsby'
import carouselImg1 from '../../images/Carousel1.jpg'
import carouselImg2 from '../../images/Carousel2.jpg'
import carouselImg3 from '../../images/Carousel3.jpg'
import carouselImg4 from '../../images/Carousel4.jpg'
import carouselImg5 from '../../images/Carousel5.jpg'
import '../Carousel/CSS/index.css'

const CarouselImg = () =>{
    return(
    <div className="container-fluid carouselImg">
        <Carousel pause={false} indicators={false} touch={false} controls={true}>
            <Carousel.Item interval={2000}>
                <img src={carouselImg2} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={carouselImg3}  />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={carouselImg1}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div className="carouselContent row d-flex justify-content-center mt-4">
            <Link className="carouselItem col-xl-6" to="/">
                <img src={carouselImg4}/>
            </Link>
            <Link className="carouselItem col-xl-6" to="/">
                <img src={carouselImg5}/>
            </Link>
        </div>
    </div>
    )
}

export default CarouselImg