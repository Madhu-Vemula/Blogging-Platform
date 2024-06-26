import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import mockAPI from "../utils/mockAPI";

const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    id: Date.now(),
  });

  useEffect(() => {
    if (isEdit) {
      const fetchedPost = mockAPI.getPostById(Number(id));
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      mockAPI.updatePost(post);
    } else {
      mockAPI.addPost(post);
    }
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>{isEdit ? "Edit Post" : "Add Post"}</h1>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Content:
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          required
          rows="15"
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={post.date}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">{isEdit ? "Update Post" : "Add Post"}</button>
    </Form>
  );
};

export default AddEditPost;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20240304/pngtree-abstract-vector-orange-dark-color-green-light-background-image_15635106.jpg");
  background-size: cover;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
