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
