import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #343a40;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #6c757d;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Image = styled.img`
  @media (max-width: 768px) {
    width: 100vw;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Image src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" />
      <Title>Post Not Found</Title>
      <Message>Sorry, the post you are looking for does not exist.</Message>
      <StyledLink to="/">Go back to the homepage</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
