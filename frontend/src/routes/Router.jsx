import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import BlogPost from "../pages/BlogPost";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/Profile" element={<Profile />} exact />
          <Route path="/Upload" element={<BlogPost />} exact />
          <Route path="/Login" element={<Login />} exact />
          <Route path="/Signup" element={<Signup />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
