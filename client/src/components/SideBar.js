import { Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideBar = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("user"))
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div style={{ height: "100%", border: "1px solid gray" }}>
      <Sidebar>
        <Menu style={{ paddingTop: "20px" }}>
          {
            userInfo?.Role == "Admin"
              ? <MenuItem component={<Link to="/admin" />}>Approve Request</MenuItem>
              : <MenuItem component={<Link to="/user" />}>Request Absence</MenuItem>
          }
          <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
