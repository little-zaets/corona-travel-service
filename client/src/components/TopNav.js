import { Link } from 'react-router-dom';
import { Button, Typography, Menu, Avatar } from 'antd';
import { GlobalOutlined, BookOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import icon from '../assets/covidspinner.png';
const TopNav = () => (
  <div className="nav-container">
    <div className="logo-container">
      {/* <Avatar src={icon} size="large" /> */}
      <Typography.Title level={3} className="logo">
        <Link className="nav-link" to="/">
          Red Avert
        </Link>
      </Typography.Title>
    </div>
    <Menu theme="dark">
      <Menu.Item className="menu-selected" icon={<GlobalOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item className="menu-selected" icon={<BookOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item className="menu-selected" icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item className="menu-selected" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  </div>
);
export default TopNav;