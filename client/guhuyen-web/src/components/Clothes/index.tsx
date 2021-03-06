import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

import clothes1 from '../../images/Clothes1.jpg'
import clothes2 from '../../images/Clothes2.jpg'
import clothes3 from '../../images/Clothes3.jpg'
import clothes4 from '../../images/Clothes4.jpg'
import clothes5 from '../../images/Clothes5.jpg'
import clothes6 from '../../images/Clothes6.jpg'
import clothes7 from '../../images/Clothes7.jpg'
import clothes8 from '../../images/Clothes8.jpg'
import './CSS/index.css'

interface OBJ {
    photos: any[],
    galleryOpened: boolean,
    arguments: any[],

}


const photos = [
    {
        photo: "../../images/Clothes1.jpg",
        caption: "Viñales, Pinar del Río, Cuba",
        subcaption: "Photo by Simon Matzinger on Unsplash",
        thumbnail: "../../images/Clothes5.jpg",
    },
    {
        photo: "../../images/Clothes2.jpg",
        caption: "La Habana, Cuba",
        subcaption: "Photo by Gerardo Sanchez on Unsplash",
        thumbnail: "../../images/Clothes6.jpg",
    }, {
        photo: "../../images/Clothes3.jpg",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        thumbnail: "../../images/Clothes7.jpg",
    },
    {
        photo: "../../images/Clothes4.jpg",
        caption: "Woman smoking a tobacco",
        subcaption: "Photo by Hannah Cauhepe on Unsplash",
        thumbnail: "../../images/Clothes8.jpg",
    }
];

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
                                <img src={clothes1} />
                            </div>
                            <div className="dressText">
                                <h5>ĐẦM TWEED CỔ VUÔNG</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <img src={clothes2} />
                            </div>

                            <div className="dressText">
                                <h5>ĐẦM REN DÁNG SUÔNG</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <img src={clothes3} />
                            </div>
                            <div className="dressText">
                                <h5>ÁO KHOÁC HỌA TIẾT GHI TÍM</h5>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="col-xl-3 dreessItem">
                            <div className="dressImg">
                                <img src={clothes4} />
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


            <h3>Test</h3>
            <button onClick={toggleGallery}>Open photo gallery</button>
            <ReactBnbGallery
                show={galleryOpened}
                photos={photos}
                onClose={toggleGallery} />
    )

        </div>
    )
}



export default Clothes