import React from 'react'
import collectionVideo1 from "../../images/Collection1.mp4"
import collectionVideo2 from "../../images/Collection2.mp4"
import collectionVideo3 from "../../images/Collection3.mp4"
import collectionVideo4 from "../../images/Collection4.mp4"
import './CSS/index.css'


const Collection = () =>{

    return(
        <div className="container-fluid collection">
            <h3>Chơi game Android trên PC. Tiến xa hơn</h3>
             <div className="collectionContent row">
                 <div className="collectionItem col-lg-8">
                    <video src={collectionVideo1} autoPlay loop muted />
                 </div>
                 <div className="collectionItem col-lg-4">
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="collection1">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        MAY 10 - ĐẲNG CẤP LUÔN ĐƯỢC KHẲNG ĐỊNH
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="collection1" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        Tổng công ty May 10 là doanh nghiệp luôn đứng trong Top đầu của ngành dệt may Việt Nam. Hơn 70 năm xây dựng và phát triển, các sản phẩm thời trang do May 10 sản xuất đã xuất 
                                        khẩu sang thị trường thời trang EU, Mỹ, Nhật Bản, Canada… với rất nhiều tên tuổi thương hiệu lớn của ngành thời trang thế giới như: GAP, Old Navy, Brandtex, John Lewis, Pierre 
                                        Cardin, Camel, Tommy Hilfiger, Express, ...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="collection2">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        THỜI TRANG CÔNG SỞ MAY10
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="collection2" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        Thời trang công sở, đặc biệt là mua sắm trang phục công sở online đang trở thành nhu cầu thiết yếu của quý khách hàng. Thấu hiểu điều này, TCT May 10 cho ra mắt Fanpage : Thời Trang May 10 và Website 
                                        hương mại điện tử : www.may10.vn sẽ mang đến các sản phẩm quần áo công sở tới quý khách hàng.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="collection3">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        THỜI TRANG M2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="collection3" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>✨Gợi ý “đồng phục” dạo chơi cho cả gia đình ✨</p>
                                    <p>💕Cuối tuần là khoảng thời gian lý tưởng để tất cả mọi thành viên trong gia đình ra ngoài dạo chơi. 
                                        Vì thế M2 gợi ý bạn những bộ dress code hoàn hảo dành cho gia đình bạn.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="collection4">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Đồng bộ hóa đa phiên bản
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="collection4" data-parent="#accordionExample">
                                <div className="card-body">
                                    Đồng bộ hóa đa phiên bản
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="collection5">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        FPS cao hơn
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="collection5" data-parent="#accordionExample">
                                <div className="card-body">
                                Theo dõi kẻ thù tốt hơn, hành động nhanh và tiêu diệt gọn hơn với Tốc độ khung hình cao trong các trò chơi chiến đấu đồ họa nặng.
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default Collection

