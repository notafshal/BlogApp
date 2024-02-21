import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import BlogPost from "../pages/BlogPost";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/Profile" element={<Profile />} exact />
          <Route path="/Upload" element={<BlogPost />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
