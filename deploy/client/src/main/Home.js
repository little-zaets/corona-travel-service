import RestrictionsContainer from "../containers/RestrictionsContainer";
import Global from "../containers/Global";
import { Typography} from "antd";

const { Title } = Typography;

const Home = (props) => {

  return (
    <>
      <div className={"background-container"}></div>
      <div style={{ zIndex: 2, position: "relative" }}>
        <div className={"global-container statsN"}>
          <div className={"stats-inner"}>
            <Title level={2} className="heading">
              Global Stats <br />
            </Title>
            <Global />
          </div>
          <div className="home-heading-container">
            <RestrictionsContainer userLoaded={props.userLoaded} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
