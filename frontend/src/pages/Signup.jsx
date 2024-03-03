import { Button, Card, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/api/users/register", {
        fullName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        alert("User Registerd successfully");
        navigate("/Login");
      })
      .catch((e) => {
        console.log(e);
        setError("Registration failed. please try again");
      });
    console.log(fullName);
    console.log("Current value of fullName:", setFullName);
  };
  return (
    <>
      <div className="loginbody">
        <NavBar />

        <Card className="p-3 mx-auto mt-5 w-25 cardColor">
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                placeholder="Enter your fullName"
                onChange={(e) => setFullName(e.target.value)}
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
