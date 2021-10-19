import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";

const LoginForm = ({
  //destruct needed props right away
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword
}) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={"white-text"}>
      <div className={"background-container"}></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   handleSubmit();
          // }}
        >
          <h2 className={"page-title"}>Login</h2>
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>
                <span className={"white"}>Remember me</span>
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={!email || !password}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            Or <Link to="/register"> <i>Register Now!</i></Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
