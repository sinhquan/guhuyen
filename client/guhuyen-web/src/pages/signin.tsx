import React from "react"
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Header from "../components/header/index"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Layout from "../components/layout";

import SEO from "../components/seo"

const SignIn = ()=>{
    return(
        <div>
            <Layout >
            <SEO title="Đăng Nhập" />
                <div className="sign-in">
                    <h1>Sign In</h1>   
                </div>
            </Layout>
        </div>
    )
}

export default SignIn