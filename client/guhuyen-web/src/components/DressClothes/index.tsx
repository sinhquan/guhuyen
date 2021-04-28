import React from "react"


import clothes1 from '../../images/Clothes1.jpg'
import clothes2 from '../../images/Clothes2.jpg'
import clothes3 from '../../images/Clothes3.jpg'
import clothes4 from '../../images/Clothes4.jpg'
import lady1 from '../../images/Blog4.jpg'
import lady2 from '../..//images/Collection1.mp4'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import './CSS/index.css'

const DressClothes = () =>{
    const options = {
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
    
            }
        },
    };
    return (
        <div className="container dress-clothes" id="clothes">
            <h2>ĐẦM BỘ BÁN CHẠY NHẤT</h2>
            <OwlCarousel className="owl-theme" {...options} >
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes1} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes2} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes3} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes4} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes1} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes2} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>

                </div>
                <div className="clothes-item">
                    <a className="clothes-img">
                        <img src={clothes3} />
                        <div className="clothes-icon">
                            <div className="icon-item icon-item1">                                    
                                <button><i className="fa fa-search" /></button>
                            </div>
                            <div className="icon-item icon-item2">                                    
                                <button><p>MUA NGAY</p></button>
                            </div>
                            <div className="icon-item icon-item3">
                                <button><i className="fa fa-shopping-bag" /></button>                                   
                            </div>
                        </div>
                    </a>
                </div>
            </OwlCarousel>
            <div className="laydy-portrait container-fluid row">
                <div className="laydy-portrait-item col-md-6">
                    <a href="#"><img src={lady1}/></a>   
                </div>
                <div className="laydy-portrait-item col-md-6">
                    <a href="#"><video src={lady2} autoPlay loop muted /></a>
                </div>
            </div>
        </div>
    )
}

export default DressClothes