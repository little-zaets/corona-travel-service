import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './main/Home';
import About from "./main/About";
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';
import { Layout, Typography, Space } from 'antd';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <TopNav />
        </div>
        <div className="main">
          <Layout className="app-layout">
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
              </Switch>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              className="home-footer-title"
            >
              Red Avert <br />
              <i style={{ color: "white", textAlign: "center", fontSize: 14 }}>
                All rights reserved
              </i>
            </Typography.Title>
            <Space className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
