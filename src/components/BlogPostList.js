import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import mockAPI from "../utils/mockAPI";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setPosts(mockAPI.getPosts());
  }, []);

  const handleDelete = (id) => {
    mockAPI.deletePost(id);
    setPosts(mockAPI.getPosts());
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container>
      <Title>Blog Posts</Title>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            By {post.author} on {new Date(post.date).toLocaleDateString()}
          </PostMeta>
          <PostContent>{post.content.substring(0, 100)}...</PostContent>
          <ReadMore to={`/post/${post.id}`}>Read More</ReadMore>
          <DeleteButton onClick={() => handleDelete(post.id)}>
            Delete
          </DeleteButton>
          <EditButton onClick={() => handleEdit(post.id)}>Edit</EditButton>
        </PostCard>
      ))}
      <AddPost to="/add">Add New Post</AddPost>
    </Container>
  );
};

export default BlogPostList;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px; 
  background-image: url("https://www.shutterstock.com/image-vector/glittering-prism-light-background-gradation-600nw-2322861801.jpg");
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
`;

const PostCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 10px 0;
`;

const ReadMore = styled(Link)`
  margin-top: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  margin-right: 10px;
`;

const AddPost = styled(Link)`
  display: block;
  width: fit-content;
  margin: 20px auto 0;
  padding: 10px 15px;
  background-color: #0000ff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
`;
const DeleteButton = styled.button`
  margin-top: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
const EditButton = styled.button`
  margin-top: 10px;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 8px;
  cursor: pointer;
`;
