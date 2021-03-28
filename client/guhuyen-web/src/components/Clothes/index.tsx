import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import Carousel from '../../../node_modules/react-bootstrap/Carousel'

import clothes1 from '../../images/Clothes1.jpg'
import clothes2 from '../../images/Clothes2.jpg'
import clothes3 from '../../images/Clothes3.jpg'
import clothes4 from '../../images/Clothes4.jpg'

import './CSS/index.css'


const Clothes = () => {
    return (
        <div className="container clothes" id="clothes">
            <div className="text-center mx-auto ">
                <h3 className="section-title">Sản phẩm mới nhất</h3>
            </div>
            <div className="clothesContent">
                    <div className="clothesImg">
                    <div className="clothesItem">
                            <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
            </div>
            <div className="text-center mx-auto">
                <h3 className="section-title">Đầm váy</h3>
            </div>
            <div className="clothesContent">
                    <div className="clothesImg">
                        <div className="clothesItem">
                            <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
            </div>
            <div className="text-center mx-auto">
                <h3 className="section-title">Đồ công sở</h3>
            </div>
            <div className="clothesContent">
                    <div className="clothesImg">
                    <div className="clothesItem">
                            <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes1} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes2} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={4500} className="row ml-0 mr-0" >
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img  src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-xs-12 clothesCover">
                                        <img src={clothes3} />
                                        <h3>Đầm chữ A</h3>
                                    </div>
                                </Carousel.Item>
                                
                            </Carousel>
                        </div>
                    </div>
            </div>
        </div>
    )
}



export default Clothes