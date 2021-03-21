import React from "react"
import blog1 from "../../images/Blog1.jpg"
import blog4 from "../../images/Blog4.jpg"
import saleBlog1 from "../../images/saleBlog1.jpg"

import './CSS/index.css'
const Blogs = () =>{
    return(
        <div className="blogs container" id="blogs">
            <h2>Tin tức thời trang</h2>
            <div className="blogsContent row">
                <div className="blogsItem col-lg-4">
                    <div className="blogImg">
                        <img src={blog1}/>
                    </div>
                    <div className="blogText">
                        <h4>Bạn đã sẵn sàng cho mùa hè này chưa?</h4>
                        <p className="textP">
                            Cùng M2 chào đón mùa hè rực rỡ với hàng ngàn items hấp dẫn cho nàng. 
                            Với thiết kế trẻ trung, tươi mới cùng chất liệu vô cùng nhẹ nhàng, 
                            thông thoáng giúp nàng biến hóa hoàn hảo với mọi phong cách.▷ Đặt hàng trực tiếp ...
			            </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 20">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg> 21/3/2021
                        </p>
                    </div>
                </div>
                <div className="blogsItem col-lg-4">
                    <div className="blogImg">
                        <img src={blog4}/>
                    </div>
                    <div className="blogText">
                        <h4>Bạn đã sẵn sàng cho mùa hè này chưa?</h4>
                        <p className="textP">
                            Cùng M2 chào đón mùa hè rực rỡ với hàng ngàn items hấp dẫn cho nàng. 
                            Với thiết kế trẻ trung, tươi mới cùng chất liệu vô cùng nhẹ nhàng, 
                            thông thoáng giúp nàng biến hóa hoàn hảo với mọi phong cách.▷ Đặt hàng trực tiếp ...
			            </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 20">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg> 21/3/2021
                        </p>
                    </div>
                </div>
                <div className="blogsItem col-lg-4">
                    <div className="blogImg">
                        <img src={saleBlog1}/>
                    </div>
                    <div className="blogText">
                        <h4>Bạn đã sẵn sàng cho mùa hè này chưa?</h4>
                        <p className="textP">
                            Cùng M2 chào đón mùa hè rực rỡ với hàng ngàn items hấp dẫn cho nàng. 
                            Với thiết kế trẻ trung, tươi mới cùng chất liệu vô cùng nhẹ nhàng, 
                            thông thoáng giúp nàng biến hóa hoàn hảo với mọi phong cách.▷ Đặt hàng trực tiếp ...
			            </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 20">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg> 21/3/2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs