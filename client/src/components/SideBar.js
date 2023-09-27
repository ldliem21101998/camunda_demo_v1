import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideBar = () => {
  return (
    <div style={{ height: "100%", border: "1px solid gray" }}>
      <Sidebar>
        <Menu style={{ paddingTop: "20px" }}>
          <MenuItem component={<Link to="/user" />}>Request Absence</MenuItem>
          <MenuItem component={<Link to="/admin" />}>Approve Request</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
