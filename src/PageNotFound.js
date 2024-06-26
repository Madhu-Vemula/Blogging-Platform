import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f8f8f8;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

const BackLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  border: 2px solid #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
const Image = styled.img`
  @media (max-width: 768px) {
    width: 100vw;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const PageNotFound = () => {
  return (
    <NotFoundContainer>
      <Image src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" />
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        Sorry, the page you are looking for does not exist.
      </NotFoundMessage>
      <BackLink to="/">Go Back to Home</BackLink>
    </NotFoundContainer>
  );
};

export default PageNotFound;
