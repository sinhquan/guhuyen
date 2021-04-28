import React from 'react'
import {Link} from 'gatsby'
import carousel from '../../images/Collection1.mp4'
import '../Carousel/CSS/index.css'

const CarouselImg = () =>{
    return(
    <div className="container-fluid carouselImg ">
        <video src={carousel} autoPlay loop muted/>
        <div className="carouselContent ">
            <h1 style={{color:"rgba(255, 255, 255, 0.753)"}}>NHÀ MAY GU HUYỀN </h1>
            <h2 style={{color:"rgba(255, 255, 255, 0.568)"}}>May và bán đầm váy</h2>
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