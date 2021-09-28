import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import RestrictionsContainer from "../containers/RestrictionsContainer";
import Global from "../containers/Global";
import { Typography, Row, Col, Space, Statistic } from "antd";
const { Title } = Typography;

const Home = () => {
  // const { user } = useSelector((state) => ({ ...state }));
  
  return (
    <>
      <div className="global-container">
        <Title level={2} className="heading">
          Global Stats <br/>
        </Title>
        <Global />
        <div className="home-heading-container">
          <Title level={3} className="home-title">
            Travelling? <br />
            Unsure of the requirements for your destination?
          </Title>
          <Title level={4} className="home-subtitle">
            <Link to="/login" className="home-login-link"><i>Login </i></Link>
            <i>to get informed!</i>
          </Title>
        </div>
      </div>
      {/* <Row>
        <Col span={24}>
          <RestrictionsContainer />
        </Col>
      </Row> */}
    </>
  );
};

export default Home;
