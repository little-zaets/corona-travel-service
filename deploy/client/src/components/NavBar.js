import { Link } from "react-router-dom";
import { Button, Typography, Menu, Avatar } from "antd";
import {
  GlobalOutlined,
  BookOutlined,
  UserOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import icon from "../assets/covidspinner.png";
import axios from "axios";

const NavBar = (props) => {
  const logout = async () => {
    await axios.post(
      `${process.env.REACT_APP_API}/logout`,
      {},
      { withCredentials: true }
    );
    window.location = "/";
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <Typography.Title level={3} className="logo">
          <Link className="nav-link" to="/">
            <div style={{ height: "40px", overflow: "hidden" }}>Red Avert</div>
          </Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          onClick={props.closeDrawer}
          className="menu-selected"
          icon={<GlobalOutlined />}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        {props.userLoaded && (
          <Menu.Item key="2" className="menu-selected" icon={<BookOutlined />}>
            <Link to="/search_history">Search History</Link>
          </Menu.Item>
        )}
        {!props.userLoaded && (
          <Menu.Item key="3" className="menu-selected" icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
        {!props.userLoaded && (
          <Menu.Item
            key="4"
            className="menu-selected"
            icon={<UserAddOutlined />}
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
        )}
        {props.userLoaded && (
          <Menu.Item key="5" className="menu-selected" icon={<UserOutlined />}>
            <a href={"#"} onClick={logout}>
              Logout
            </a>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default NavBar;


