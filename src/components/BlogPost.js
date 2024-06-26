import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import mockAPI from "../utils/mockAPI";
import PostNotFound from "./PostNotFound";
const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchedPost = mockAPI.getPostById(id);
    if (fetchedPost) {
      setPost(fetchedPost);
    }
  }, [id]);

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <PostMeta>
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </PostMeta>
      <Content>{post.content}</Content>
      <BackLink to="/">Back to Posts</BackLink>
    </Container>
  );
};

export default BlogPost;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const PostMeta = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
