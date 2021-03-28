import React from 'react'
import {Link} from 'gatsby'
import carousel from '../../images/Carousel.png'
import '../Carousel/CSS/index.css'

const CarouselImg = () =>{
    return(
    <div className="container-fluid carouselImg ">
        <img src={carousel} alt=""/>
        <div className="carouselContent ">
            <h1>NHÀ MAY GU HUYỀN </h1>
            <h2>May và bán đầm váy</h2>
            <div className="carouselIcon">
                <div className="carouselLink">
                    <Link to="#" className="btn btn-success py-3 mt-3 btn-custom-outline">Liên hệ chúng tôi</Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CarouselImg