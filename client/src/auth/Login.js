import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await login(email, password);
      if (response.data) {
        console.log(response.data)
        window.location = '/dashboard';
      }
    }
    catch (err) {
      console.log(err);
      if (err.response.status !== 200) {
        toast.error(err.response.data);
      }
    }
	}
  return (
    <>
      <div className="container-fluid bg-secondary p- text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <LoginForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
