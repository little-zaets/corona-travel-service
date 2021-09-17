import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const LoginForm = ({
  //destruct needed props right away
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword
}) => (
  <Form.Floating onClick={handleSubmit} className="mt-3">
    <FloatingLabel
      className="mb-3"
      controlId="floatingInput"
      label="Email Address"
    >
      <Form.Control
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </FloatingLabel>

    <FloatingLabel
      className="mb-3"
      controlId="floatingPassword"
      label="Password"
    >
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </FloatingLabel>
    <button disabled={!email || !password} className="btn btn-secondary">
      Submit
    </button>
  </Form.Floating>
);

export default LoginForm;
