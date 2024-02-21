import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Card } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";


const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/blogs/").then((res) => {
      setBlogs(res.data.data);
    });
  }, []);
  const LikeButton = () => {
    console.log("clicked");
  };
  console.log(blogs);
  return (
    <>
      <NavBar />

      {blogs.map((blog) => (
        <Card className="card m-3 p-2" key={blog._id}>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">name</Card.Subtitle>
          <Card.Text>{blog.content}</Card.Text>
          <button>
            <CiHeart onClick={LikeButton} />
          </button>

          {blog.likes}
        </Card>
      ))}
    </>
  );
};
export default HomePage;
