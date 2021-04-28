import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './CSS/animate.css'
import '../pages/CSS/index.css'


import Header from "../components/header/index"
import CarouselImg from "../components/Carousel"
import Clothes from "../components/Clothes"
import OfficeClothes from "../components/OfficeClothes"
import DressClothes from "../components/DressClothes"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"


const IndexPage = () => (
  <Layout>
    <SEO title="Trang chủ" />
    <Header />
    <CarouselImg />
    <Clothes />
    <OfficeClothes />
    <DressClothes />
    <Blogs />
    <Footer />
  </Layout>
)

export default IndexPage
