import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="container-fluid h1 p- text-center">
      About 
    </div>
  );
};

export default About;
