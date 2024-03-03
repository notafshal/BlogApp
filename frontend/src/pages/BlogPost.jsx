import { Button, Card, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

const BlogPost = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const postVlog = (e) => {
    e.preventDefault();

    const newBlogObj = {
      title: newTitle,
      content: newContent,
      likes: 0,
    };

    axios.post("http://localhost:3001/api/blogs", newBlogObj).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="loginbody">
        <NavBar />
        <Card className="p-3 mx-auto mt-5 cardColor w-25">
          <h4>Post a blog</h4>
          <Form onSubmit={postVlog}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
              placeholder="Title of Your Blog"
            />

            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              value={newContent}
              onChange={(e) => {
                setNewContent(e.target.value);
              }}
              placeholder="Content of Your Blog"
            />

            <Button
              className="mt-3 hovering"
              style={{ background: "#99cc99", color: "#fff", border: "none" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default BlogPost;
