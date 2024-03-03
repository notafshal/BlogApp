import { Form, Button, Card } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formhandler = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    const user = await loginService(credentials).then((result) => {
      console.log(result);
      navigate("/");
    });
    console.log(user);
  };

  return (
    <>
      <div className="loginbody">
        <NavBar />
        <Card className="p-3 mx-auto mt-5 cardColor w-25 ">
          <Form onSubmit={formhandler}>
            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
            <div className="text-center">
              <Button
                style={{
                  background: "#99cc99",
                  color: "#fff",
                  border: "none",
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>

          <Link className="mx-auto mt-2 " to="/Signup">
            Create a account
          </Link>
        </Card>
      </div>
    </>
  );
};
export default Login;
