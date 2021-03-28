import React,{useEffect} from 'react'
import { Link } from "gatsby"

import logo from '../../images/logo.png'


import './CSS/index.css'

interface Set{
    scrolled:boolean,
    sticky:number
}

const Header = ({}:Set) =>{
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 50 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=['Navbar1'];
    if(scrolled){
      x.push('scrolled');
    }

    return(
    <header className={x.join(" ")} >
        <nav className="navbar navbar-expand-lg navbar-light Navbar animated wow slideInLeft" id="header" data-wow-delay="700ms">
            <Link className="logo navbar-brand" to="/">
                <img src={logo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mx-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link"  to="/">TRANG CHỦ<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown " id="dress">
                        <Link className="nav-link"  to="/" id="dropdownMenuLinkDress" data-toggle="dropdown">SẢN PHẨM <i className="fa fa-angle-down"></i></Link>                                                           
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkDress">
                                <Link className="dropdown-item" to="/">ĐẦM VÁY</Link>
                                <Link className="dropdown-item" to="/">ĐỒ CÔNG SỞ</Link>
                                <Link className="dropdown-item" to="/">ĐẦM BỘ</Link>
                                <Link className="dropdown-item" to="/">SP KHÁC</Link>
                            </div>                            
                    </li>
                    <li className="nav-item dropdown " >
                        <Link className="nav-link" to="/" id="dropdownMenuLinkDressShort" data-toggle="dropdown" >BLOG</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/" id="dropdownMenuLinkClothesOffice" data-toggle="dropdown">GIỚI THIỆU</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/" id="dropdownMenuLinkClothesOffice" data-toggle="dropdown">LIÊN HỆ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">KHUYỄN MÃI</Link>
                    </li>

                </ul>

              
            </div>
        </nav>
    </header>
    )
}

export default Header
