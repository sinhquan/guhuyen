import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Header from "../components/header/index"
import CarouselImg from "../components/Carousel"
import Clothes from "../components/Clothes"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../pages/CSS/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <CarouselImg />
    <Clothes />
  </Layout>
)

export default IndexPage
