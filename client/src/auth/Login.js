import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await login(email, password);
      if (response.data) {
        console.log(response.data);
        toast.success("Login Successful. You can now view your search history.");
        window.location = "/search_history";
      }
    } catch (err) {
      console.log(err);
      if (err.response.status !== 200) {
        toast.error(err.response.data);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={"login-form-outer"}>
        <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>
    </>
  );
};

export default Login;
