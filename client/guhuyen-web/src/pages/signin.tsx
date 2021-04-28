import React from "react"
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Header from "../components/header/index"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"



const SignIn = ()=>{
    return(
        <div>
            <Header />
            <Carousel />
            <div className="sign-in">
                <h1>Sign In</h1>
                
            </div>
            <Footer />
        </div>
    )
}

export default SignIn