import { Form, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formhandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <NavBar />
      <Form onSubmit={formhandler}>
        <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/Signup">Register</Link>
    </>
  );
};
export default Login;
