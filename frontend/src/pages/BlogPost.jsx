import { Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

const BlogPost = () => {
  const [newTitle, setNewTitle] = useState();
  const [newContent, setNewContent] = useState();

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
      <NavBar />
      <h2 className="mb-3 px-5">Post a blog</h2>
      <Form onSubmit={postVlog}>
        <Form.Label>Title </Form.Label>
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

        <Button className="mx-5" variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default BlogPost;
