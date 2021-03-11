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
    console.log('x',x);
    console.log("scrolled",scrolled)



    return(
    <header className={x.join(" ")} >
        <nav className="navbar navbar-expand-lg navbar-light Navbar" id="header">
            <Link className="logo navbar-brand" to="/">
                <img src={logo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
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
                <form className=" search form-inline my-2 my-lg-0">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tìm kiếm ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
               </form>

              
            </div>
        </nav>



        

    </header>
    )
}

export default Header
