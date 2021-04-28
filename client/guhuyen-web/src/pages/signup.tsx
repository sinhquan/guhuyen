import React from "react"
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Header from "../components/header/index"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import { useForm } from "react-hook-form";
import './CSS/SignUp.css'



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} không được trống!',
      password1: '${label} không được trống!',
      password2: '${label} không được trống!'

    },
    number: {
      range: '${label} ít nhất ${min} kí tự và nhiều nhất ${max} kí tự',
    },
  };


const SignUp = () =>{
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
    return(
        <div>
             <Header />
             <Carousel />
             <div className="sign-up container mx-auto">
                <h1>Tạo Tài Khoản</h1>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true,max:20, min:3 }]} >
                        <Input  />
                    </Form.Item>
                    <Form.Item name={['user', 'password1']} label="Mật khẩu:" rules={[{ required: true,max:20, min:3}]}> 
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name={['user', 'password2']} label="Nhập lại mật khẩu:" rules={[{ required: true,max:20, min:3}]}> 
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
             </div>
            <Footer />
        </div>
    )
}

export default SignUp