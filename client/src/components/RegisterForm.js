import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
  <Form.Floating className="mt-3">
    <FloatingLabel className="mb-3" controlId="floatingInput" label="Name">
      <Form.Control
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </FloatingLabel>

    <FloatingLabel
      className="mb-3"
      controlId="floatingEmail"
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
    <button type="submit" onClick={handleSubmit} disabled={!name || !email || !password} className="btn btn-secondary">
      Submit
    </button>
  </Form.Floating>
);

export default RegisterForm;
