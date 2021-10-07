import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./main/Home";
import SearchHistory from "./main/SearchHistory";
import Login from "./auth/Login";
import Register from "./auth/Register";
import NavBar from "./components/NavBar";
import { Layout, Typography, Space } from "antd";
import withAuth from "./auth/withAuth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Drawer, Button, Radio } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const NavbarOuter = (props) => {
  if (window.innerWidth < 500) {
    return (
      <>
        <div onClick={props.openDrawer} className={"drawer-icon"}>
          <MenuOutlined />
        </div>

        <Drawer
          visible={props.visible}
          placement={"left"}
          width={200}
          onClose={props.closeDrawer}
        >
          <NavBar
            closeDrawer={props.closeDrawer}
            userLoaded={props.userLoaded}
          />
        </Drawer>
      </>
    );
  } else {
    return (
      <div className="navbar">
        <NavBar closeDrawer={props.closeDrawer} userLoaded={props.userLoaded} />
      </div>
    );
  }
};

const App = () => {
  const [user, setUser] = useState([]);
  const [userLoaded, setUserLoaded] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/checkToken`,
        { withCredentials: true }
      );
      return { success: true, data: response.data };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };
  useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let res = await fetchUser();
      if (res.success) {
        console.log("logged in ");
        // setUser(res.data.results[0]);
        setUserLoaded(true);
      } else {
        console.log("not logged in ");
        setUserLoaded(false);
      }
    })();
  }, []);

  const closeDrawer = () => {
    setNavVisible(false);
  };

  const openDrawer = () => {
    setNavVisible(true);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavbarOuter
          visible={navVisible}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          userLoaded={userLoaded}
        />

        <div className="main">
          <Layout className="app-layout">
            <div className="routes" style={{ minHeight: "75vh" }}>
              <Switch>
                <Route exact path="/">
                  <div className={"page-container"}>
                    <Home userLoaded={userLoaded} />
                  </div>
                </Route>

                <Route exact path="/search_history">
                  {userLoaded && (
                    <div className={"page-container"}>
                      <SearchHistory />
                    </div>
                  )}
                </Route>

                <Route exact path="/login">
                  {!userLoaded && (
                    <div className={"page-container"}>
                      <Login />
                    </div>
                  )}
                </Route>
                <Route exact path="/register">
                  {!userLoaded && (
                    <div className={"page-container"}>
                      <Register />
                    </div>
                  )}
                </Route>
              </Switch>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              onClick={closeDrawer}
              level={5}
              className="home-footer-title"
            >
              Red Avert <br />
              <i style={{ color: "white", textAlign: "center", fontSize: 14 }}>
                All rights reserved
              </i>
            </Typography.Title>
            <div
              style={{
                width: "190px",
                position: "relative",
                margin: "5px auto 0"
              }}
            >
              <Space className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
