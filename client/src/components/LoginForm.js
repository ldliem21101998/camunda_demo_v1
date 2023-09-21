import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  if (values.username === "user" && values.password === "user") {
    window.location.href = "/user";
  }
  if (values.username === "admin" && values.password === "admin") {
    window.location.href = "/admin";
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => (
  <Form
    name="basic"
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm;
