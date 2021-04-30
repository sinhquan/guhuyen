import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './CSS/animate.css'
import '../pages/CSS/index.css'


import Clothes from "../components/Clothes"
import OfficeClothes from "../components/OfficeClothes"
import DressClothes from "../components/DressClothes"
import Blogs from "../components/Blogs"







const IndexPage = () => (
  <Layout>
    <SEO title="Trang chủ" />
    <Clothes />
    <OfficeClothes />
    <DressClothes />
    <Blogs />
  </Layout>
)

export default IndexPage
