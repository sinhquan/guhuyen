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
            <div className="text-center mx-auto">
                <h3>Sản phẩm nổi bật</h3>
                <p>Các sản phẩm nổi bật theo từng loại sản phẩm</p>
            </div>
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">ĐẦM</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">VÁY</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">ĐỒ CÔNG SỞ</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel row" aria-labelledby="home-tab">
                    <div className="dreessTab row">
                        <div className="col-lg-3 col-md-6 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                    <Carousel.Item interval={3000} >
                                        <img src={clothes1} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes2} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes3} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="dressText">
                                <h5>ĐẦM TWEED CỔ VUÔNG</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                    <Carousel.Item interval={3000} >
                                        <img src={clothes2} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes3} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes4} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div className="dressText">
                                <h5>ĐẦM REN DÁNG SUÔNG</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                    <Carousel.Item interval={3000} >
                                        <img src={clothes3} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes4} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes1} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="dressText">
                                <h5>ÁO KHOÁC HỌA TIẾT GHI TÍM</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={true} >
                                    <Carousel.Item interval={3000} >
                                        <img src={clothes4} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes3} />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img src={clothes1} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="dressText">
                                <h5>ZUÝP CHỮ A CẠP CHUN</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">456</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">789</div>
            </div>
        </div>
    )
}



export default Clothes