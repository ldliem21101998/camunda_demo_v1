import React, { useState } from "react";
import { Button, Form, Input, Checkbox, Row, Col } from "antd";
import { loginRequest } from "../services/authorization"
import { useNavigate } from "react-router";
import LoginImg from "../assests/images/HRM.jpg";
import "./styles.css";

const LoginForm = () => {
  const { TextArea } = Input;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    Password: "",
    Username: ""
  })

  const handleLogin = async () => {
    await loginRequest(credentials).then((res) => {
      // console.log(res);
      sessionStorage.setItem("user", JSON.stringify(res.data))
    })

    const userInfo = JSON.parse(sessionStorage.getItem("user"))

    if (userInfo.Role == "Admin") {
      navigate("/admin")
    } else {
      navigate("/user")
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={LoginImg} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
        >
          <p className="form-title">Welcome back</p>
          <p className="form-description">Login to the Dashboard</p>
          <Form.Item
            name="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              onChange={(e) => setCredentials({ ...credentials, Username: e.target.value })}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              onChange={(e) => setCredentials({ ...credentials, Password: e.target.value })}
            />
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="signup" valuePropName="checked" className="form-item-signup">
                <Button type="link">
                  Sign up
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => handleLogin()}>
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default LoginForm;
