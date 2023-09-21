import React from "react";
import LoginForm from "../../components/LoginForm";
const Login = () => {
  return (
    <div
      style={{
        height: "10vh",
        width: "50vh",
        margin: "auto",
        paddingTop: "30vh",
      }}
    >
      <h1 style={{ padding: "25px 0px" }}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
