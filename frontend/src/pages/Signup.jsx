import { Button, Card, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    const newUserObj = {
      fullname: fullname,
      email: email,
      password: password,
    };
    console.log(newUserObj);
    await axios
      .post("http://localhost:3001/api/users/register", newUserObj)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <div className="loginbody">
        <NavBar />
        <Card className="p-3 mx-auto mt-5 w-25 cardColor">
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                value={fullname}
                placeholder="Enter your fullname"
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                style={{ background: "#99cc99", color: "#fff", border: "none" }}
                type="submit"
              >
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default Signup;
