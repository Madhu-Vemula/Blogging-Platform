import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPostList from "./components/BlogPostList";
import BlogPost from "./components/BlogPost";
import AddEditPost from "./components/AddEditPost";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/add" element={<AddEditPost />} />
        <Route path="/edit/:id" element={<AddEditPost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
