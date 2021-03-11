import React from 'react'
import {Link} from 'gatsby'
import carousel from '../../images/Carousel.png'
import Carousel from '../../../node_modules/react-bootstrap/Carousel'
import '../Carousel/CSS/index.css'

const CarouselImg = () =>{
    return(
    <div className="container-fluid carouselImg ">
        <img src={carousel} alt=""/>
        <div className="carouselContent ">
            <h1>BlueStack 5</h1>
            <h2>Nhanh hơn, nhẹ hơn. Thay đổi cuộc chơi</h2>
            <div className="carouselIcon">
                <Carousel pause={false} indicators={false} touch={false} controls={false} fade={true}>
                    <Carousel.Item interval={3000} >
                        <i className="fa fa-heart"></i>
                        <h4>HƠN 100 KHÁCH HÀNG</h4>
                        <p>CẢM THẤY HÀI LÒNG VỚI TRANG PHỤC</p>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <i className="fa fa-female"></i>
                        <h4>HƠN 100 KIỂU QUẦN ÁO</h4>
                        <p>CÓ TẠI CỬA HÀNG CHÚNG TÔI</p>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <i className="fa fa-thumbs-up"></i>
                        <h4>NHẬN SỬA QUẦN ÁO</h4>
                        <p>VÀ NHẬN ĐẶT MAY, THEO YÊU CẦU</p>
                    </Carousel.Item>
                </Carousel>
                <div className="carouselLink">
                    <Link to="#" className="btn btn-success py-3 mt-3">Click Để Xem Những Sản Phẩm Khác</Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CarouselImg