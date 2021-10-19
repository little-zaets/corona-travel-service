import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";

const RegisterForm = ({
  //destruct needed props right away
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword
}) => (
  <div className={"white-text"}>
    <div className={"background-container"}></div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <h2 className={"page-title"}>Register</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={!name || !email || !password}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          Already registered? <Link to="/login"> <i>Login Now!</i></Link>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default RegisterForm;
