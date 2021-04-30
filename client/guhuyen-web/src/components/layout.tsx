import React, { ReactNode } from "react"
import Header from "../components/header/index"
import Footer from "../components/Footer"
import  Carousel  from "../components/Carousel"
// import "./layout.css"

interface Props {
  children: ReactNode
}

const Layout = ({ children } : Props) => {
  return (
      <div>
        <Header />
        <Carousel />
        <main>{children}</main>
        <Footer />   
      </div>
  )
}

export default Layout