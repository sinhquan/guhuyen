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
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=['Navbar'];
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-up" viewBox="0 0 16 16">
                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z"/>
                </svg>
            </button>
            <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mx-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link"  to="/">HOME<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown " id="dress">
                        <Link className="nav-link"  to="/" id="dropdownMenuLinkDress" data-toggle="dropdown">ĐẦM <i className="fa fa-angle-down"></i></Link>                                                           
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkDress">
                                <Link className="dropdown-item" to="/">ĐẦM HỌA TIẾT1</Link>
                                <Link className="dropdown-item" to="/">ĐẦM TAY DÀI</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ A</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ V</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ SUÔNG</Link>
                            </div>                            
                    </li>
                    <li className="nav-item dropdown " >
                        <Link className="nav-link" to="/" id="dropdownMenuLinkDressShort" data-toggle="dropdown" >VÁY <i className="fa fa-angle-down"></i></Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkDressShort">
                                <Link className="dropdown-item" to="/">ĐẦM HỌA TIẾT2</Link>
                                <Link className="dropdown-item" to="/">ĐẦM TAY DÀI</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ A</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ V</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ SUÔNG</Link>
                            </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/" id="dropdownMenuLinkClothesOffice" data-toggle="dropdown">ĐỒ CÔNG SỞ <i className="fa fa-angle-down"></i></Link>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkClothesOffice">
                                <Link className="dropdown-item" to="/">ĐẦM HỌA TIẾT3</Link>
                                <Link className="dropdown-item" to="/">ĐẦM TAY DÀI</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ A</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ V</Link>
                                <Link className="dropdown-item" to="/">ĐẦM CHỮ SUÔNG</Link>
                        </div>
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
