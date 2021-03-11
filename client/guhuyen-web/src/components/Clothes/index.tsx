import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import Carousel from '../../../node_modules/react-bootstrap/Carousel'

import clothes1 from '../../images/Clothes1.jpg'
import clothes2 from '../../images/Clothes2.jpg'
import clothes3 from '../../images/Clothes3.jpg'
import clothes4 from '../../images/Clothes4.jpg'

import './CSS/index.css'

interface OBJ {
    photos: any[],
    galleryOpened: boolean,
    arguments: any[],

}


const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];


const Clothes = ({ }: OBJ) => {
    const [galleryOpened, setGalleryOpened] = useState(false);

    const toggleGallery = () => {
        setGalleryOpened(!galleryOpened)
    }
    return (
        <div className="container clothes">
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
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={false} >
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
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={false} >
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
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={false} >
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
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <Carousel pause={false} indicators={false} touch={false} controls={false} >
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


            {/* <h3>Test</h3>
            <button onClick={toggleGallery}>Open photo gallery</button>
            <ReactBnbGallery
                show={galleryOpened}
                photos={photos}
                onClose={toggleGallery} /> */}
    )

        </div>
    )
}



export default Clothes