import React from "react";
import FormField from "../../components/Form";
import SideBar from "../../components/SideBar";
const User = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <SideBar />
      <div
        style={{
          width: "20%",
          marginLeft: "10vh",
        }}
      >
        <h1 style={{ padding: "25px 0px" }}>Request Absence</h1>
        <FormField />
      </div>
    </div>
  );
};

export default User;
